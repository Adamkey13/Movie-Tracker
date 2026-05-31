import { useEffect, useMemo, useState } from "preact/hooks";
import type { User as FirebaseUser } from "firebase/auth";
import type { MediaType, WatchEntry, WatchStatus } from "../types";
import {
  deleteCloudEntry,
  getCloudEntries,
  saveCloudEntry,
} from "../services/entryService";
import { logoutFirebaseUser } from "../services/authService";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";
import { EntryFilters } from "./EntryFilters";
import { EntryList } from "./EntryList";
import { EntryModal } from "./EntryModal";
import { EntryTabs } from "./EntryTabs";

type MainScreenProps = {
  user: FirebaseUser;
};

export function MainScreen({ user }: MainScreenProps) {
  const [activeTab, setActiveTab] = useState<MediaType>("movie");
  const [entries, setEntries] = useState<WatchEntry[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState<WatchEntry | null>(null);
  const [entryToDelete, setEntryToDelete] = useState<WatchEntry | null>(null);

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState<WatchStatus | "all">("all");
  const [selectedWhereToWatch, setSelectedWhereToWatch] = useState("all");

  useEffect(() => {
    async function loadEntries() {
      const cloudEntries = await getCloudEntries(user.uid);
      setEntries(cloudEntries);
    }

    loadEntries();
  }, [user.uid]);



  useEffect(() => {
    clearFilters();
  }, [activeTab]);

  const tabEntries = useMemo(() => {
    return entries.filter((entry) => entry.type === activeTab);
  }, [entries, activeTab]);

  const categoryOptions = useMemo(() => {
    return Array.from(
      new Set(
        tabEntries
          .map((entry) => entry.category.trim())
          .filter(Boolean)
      )
    ).sort();
  }, [tabEntries]);

  const whereToWatchOptions = useMemo(() => {
    return Array.from(
      new Set(
        tabEntries
          .map((entry) => entry.whereToWatch.trim())
          .filter(Boolean)
      )
    ).sort();
  }, [tabEntries]);

  const filteredEntries = useMemo(() => {
    const normalizedSearch = searchText.trim().toLowerCase();

    return tabEntries.filter((entry) => {
      const matchesSearch =
        normalizedSearch === "" ||
        entry.name.toLowerCase().startsWith(normalizedSearch);

      const matchesCategory =
        selectedCategory === "all" || entry.category === selectedCategory;

      const matchesStatus =
        selectedStatus === "all" || entry.status === selectedStatus;

      const matchesWhereToWatch =
        selectedWhereToWatch === "all" ||
        entry.whereToWatch === selectedWhereToWatch;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesWhereToWatch
      );
    });
  }, [
    tabEntries,
    searchText,
    selectedCategory,
    selectedStatus,
    selectedWhereToWatch,
  ]);

  const movieCount = entries.filter((entry) => entry.type === "movie").length;
  const seriesCount = entries.filter((entry) => entry.type === "series").length;

  async function handleSaveEntry(entry: WatchEntry) {
    await saveCloudEntry(user.uid, entry);

    setEntries((prev) => {
      const exists = prev.some((item) => item.id === entry.id);

      if (exists) {
        return prev.map((item) => (item.id === entry.id ? entry : item));
      }

      return [entry, ...prev];
    });

    setEditingEntry(null);
    setModalOpen(false);
  }

  async function confirmDeleteEntry() {
    if (!entryToDelete) return;

    await deleteCloudEntry(user.uid, entryToDelete.id);

    setEntries((prev) => prev.filter((entry) => entry.id !== entryToDelete.id));
    setEntryToDelete(null);
  }

  function handleEditEntry(entry: WatchEntry) {
    setEditingEntry(entry);
    setModalOpen(true);
  }

  function clearFilters() {
    setSearchText("");
    setSelectedCategory("all");
    setSelectedStatus("all");
    setSelectedWhereToWatch("all");
  }

  async function handleLogout() {
    await logoutFirebaseUser();
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-12 pt-24 text-[var(--text-color)]">
      <header className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="m-0 font-black text-[var(--text-color)] opacity-80">
            Welcome back, {user.displayName ?? user.email?.split("@")[0] ?? "user"}
          </p>

          <h1 className="m-0 mt-1 text-4xl font-black leading-tight sm:text-6xl">
            Your watch journal
          </h1>
        </div>

        <button
          className="cursor-pointer w-fit rounded-full border-[3px] border-[var(--outline-color)] bg-[color-mix(in_srgb,var(--button-color)_25%,transparent)] px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--outline-color)_30%,transparent)]"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      <section className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <EntryTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          movieCount={movieCount}
          seriesCount={seriesCount}
        />

        <button
          className="cursor-pointer rounded-full bg-[var(--button-color)] px-5 py-3 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110"
          onClick={() => {
            setEditingEntry(null);
            setModalOpen(true);
          }}
        >
          + Add {activeTab === "movie" ? "movie" : "series"}
        </button>
      </section>

      <EntryFilters
        searchText={searchText}
        selectedCategory={selectedCategory}
        selectedStatus={selectedStatus}
        selectedWhereToWatch={selectedWhereToWatch}
        categoryOptions={categoryOptions}
        whereToWatchOptions={whereToWatchOptions}
        onSearchTextChange={setSearchText}
        onCategoryChange={setSelectedCategory}
        onStatusChange={setSelectedStatus}
        onWhereToWatchChange={setSelectedWhereToWatch}
        onClearFilters={clearFilters}
      />

      <EntryList
        entries={filteredEntries}
        onEdit={handleEditEntry}
        onDelete={(entry) => setEntryToDelete(entry)}
      />

      {modalOpen && (
        <EntryModal
          defaultType={activeTab}
          existingEntry={editingEntry}
          onClose={() => {
            setEditingEntry(null);
            setModalOpen(false);
          }}
          onSave={handleSaveEntry}
        />
      )}

      {entryToDelete && (
        <ConfirmDeleteModal
          entryName={entryToDelete.name}
          onCancel={() => setEntryToDelete(null)}
          onConfirm={confirmDeleteEntry}
        />
      )}
    </main>
  );
}