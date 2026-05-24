import { useEffect, useMemo, useState } from "react";
import type { MediaType, WatchEntry } from "../types";
import { getEntries, logoutUser, saveEntries } from "../utils/storage";
import { EntryTabs } from "./EntryTabs";
import { EntryList } from "./EntryList";
import { EntryModal } from "./EntryModal";
import "../styles/MainScreen.css";

type MainScreenProps = {
  username: string;
  onLogout: () => void;
};

export function MainScreen({ username, onLogout }: MainScreenProps) {
  const [activeTab, setActiveTab] = useState<MediaType>("movie");
  const [entries, setEntries] = useState<WatchEntry[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState<WatchEntry | null>(null);

  useEffect(() => {
    setEntries(getEntries(username));
  }, [username]);

  useEffect(() => {
    saveEntries(username, entries);
  }, [entries, username]);

  const filteredEntries = useMemo(() => {
    return entries.filter((entry) => entry.type === activeTab);
  }, [entries, activeTab]);

  const movieCount = entries.filter((entry) => entry.type === "movie").length;
  const seriesCount = entries.filter((entry) => entry.type === "series").length;

  function handleSaveEntry(entry: WatchEntry) {
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

  function handleDeleteEntry(id: string) {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  }

  function handleEditEntry(entry: WatchEntry) {
    setEditingEntry(entry);
    setModalOpen(true);
  }

  function handleLogout() {
    logoutUser();
    onLogout();
  }

  return (
    <main className="main-screen">
      <header className="main-header">
        <div>
          <p className="main-kicker">Welcome back, {username}</p>
          <h1>Your watch journal</h1>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <section className="toolbar">
        <EntryTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          movieCount={movieCount}
          seriesCount={seriesCount}
        />

        <button
          className="add-button"
          onClick={() => {
            setEditingEntry(null);
            setModalOpen(true);
          }}
        >
          + Add {activeTab === "movie" ? "movie" : "series"}
        </button>
      </section>

      <EntryList
        entries={filteredEntries}
        onEdit={handleEditEntry}
        onDelete={handleDeleteEntry}
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
    </main>
  );
}