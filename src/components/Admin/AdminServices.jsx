import { useState } from "react"
import { collection, deleteDoc, doc } from "firebase/firestore"
import { db } from "../Helpers/firebase"


export function ContactManager({ messages, loading, onRefresh }) {
  const [deleting, setDeleting] = useState(null)

  const handleDelete = async (id) => {
    if (!confirm("Delete this message?")) return

    try {
      setDeleting(id)
      await deleteDoc(doc(db, "contactMessages", id))
      onRefresh()
    } catch (err) {
      console.error(err)
    } finally {
      setDeleting(null)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">

      {messages.length === 0 && (
        <div className="text-center text-gray-500 py-10">
          No messages yet.
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="bg-white rounded-xl shadow-md border p-5 space-y-3"
          >
            <div>
              <h3 className="font-semibold text-lg">{msg.name}</h3>
              <p className="text-sm text-gray-500">{msg.email}</p>
              {msg.phone && (
                <p className="text-sm text-gray-500">{msg.phone}</p>
              )}
            </div>

            {msg.subject && (
              <p className="text-sm font-medium">Subject: {msg.subject}</p>
            )}

            <p className="text-sm text-gray-700 whitespace-pre-line">
              {msg.message}
            </p>

            {msg.createdAt?.toDate && (
              <p className="text-xs text-gray-400">
                {msg.createdAt.toDate().toLocaleString()}
              </p>
            )}

            <div className="pt-2">
              <button
                onClick={() => handleDelete(msg.id)}
                disabled={deleting === msg.id}
                className="text-sm text-red-600 hover:underline"
              >
                {deleting === msg.id ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}