"use client"

import { useState, useEffect } from "react"
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore"
import { Plus } from "lucide-react"
import { db } from "../components/Helpers/firebase"
import { ServiceManager } from "../components/Admin/AdminServiceManager"
import { ContactManager } from "../components/Admin/AdminServices"

export default function Admin() {
  const [services, setServices] = useState([])
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddForm, setShowAddForm] = useState(false)
  const [pages, setPages] = useState("services")

  useEffect(() => {
    fetchServices()
    fetchMessages()
  }, [])

  // SERVICES
  const fetchServices = async () => {
    try {
      const snapshot = await getDocs(collection(db, "goldrushTeam"))
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setServices(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddService = async (serviceData) => {
    await addDoc(collection(db, "goldrushTeam"), {
      ...serviceData,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    fetchServices()
    setShowAddForm(false)
  }

  const handleUpdateService = async (id, serviceData) => {
    await updateDoc(doc(db, "goldrushTeam", id), {
      ...serviceData,
      updatedAt: new Date(),
    })
    fetchServices()
  }

  const handleDeleteService = async (id) => {
    await deleteDoc(doc(db, "goldrushTeam", id))
    fetchServices()
  }

  // MESSAGES
  const fetchMessages = async () => {
    try {
      const snapshot = await getDocs(collection(db, "contactMessages"))
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setMessages(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r p-6 flex flex-col">
        <h2 className="text-lg font-bold mb-6">Admin Panel</h2>

        <nav className="space-y-3">

          <button
            onClick={() => setPages("team")}
            className="block px-4 py-2 rounded-lg hover:bg-gray-100 text-sm"
          >
            Team
          </button>

          <button
            onClick={() => setPages("messages")}
            className="block px-4 py-2 rounded-lg hover:bg-gray-100 text-sm"
          >
            Messages
          </button>

        </nav>

        <div className="mt-auto">
          <button className="w-full text-sm text-red-600 hover:underline">
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">

        <header className="bg-white border-b shadow-sm">
          <div className="flex justify-between items-center px-6 py-4">
            <h1 className="text-2xl font-bold text-[#D4AF37]">Admin Dashboard</h1>

            <button
              className="bg-[#D4AF37] text-white px-4 py-2 rounded-lg flex items-center hover:opacity-90"
              onClick={() => setShowAddForm(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Service
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 space-y-6">

          {

            pages && pages == "team" ? (
              <ServiceManager
                services={services}
                loading={loading}
                showAddForm={showAddForm}
                onAddService={handleAddService}
                onUpdateService={handleUpdateService}
                onDeleteService={handleDeleteService}
                onCloseAddForm={() => setShowAddForm(false)}
              />
            )

              :
              pages && pages ==
                "messages" ? (
                <ContactManager
                  messages={messages}
                  loading={loading}
                  onRefresh={fetchMessages}
                />
              )
                : (
                  <ServiceManager
                    services={services}
                    loading={loading}
                    showAddForm={showAddForm}
                    onAddService={handleAddService}
                    onUpdateService={handleUpdateService}
                    onDeleteService={handleDeleteService}
                    onCloseAddForm={() => setShowAddForm(false)}
                  />
                )

          }




        </main>
      </div>

    </div>
  )
}