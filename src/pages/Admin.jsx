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
  const [mobileOpen, setMobileOpen] = useState(false)

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
    <div className="flex h-screen bg-gray-100 overflow-hidden relative">

      {/* MOBILE HEADER */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-white shadow z-40 px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-[#D4AF37]">Admin</h1>
        <button
          onClick={() => setMobileOpen(true)}
          className="text-2xl"
        >
          ☰
        </button>
      </header>

      {/* OVERLAY */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
        fixed md:static top-0 left-0 h-full w-64 bg-white border-r p-6 flex flex-col z-50
        transform transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      >
        <h2 className="text-lg font-bold mb-8 text-[#D4AF37]">
          Admin Panel
        </h2>

        <nav className="space-y-3">

          <button
            onClick={() => {
              setPages("team")
              setMobileOpen(false)
            }}
            className={`w-full text-left px-4 py-2 rounded-lg text-sm transition 
          ${pages === "team"
                ? "bg-[#D4AF37] text-white"
                : "hover:bg-gray-100"
              }`}
          >
            Team
          </button>

          <button
            onClick={() => {
              setPages("messages")
              setMobileOpen(false)
            }}
            className={`w-full text-left px-4 py-2 rounded-lg text-sm transition 
          ${pages === "messages"
                ? "bg-[#D4AF37] text-white"
                : "hover:bg-gray-100"
              }`}
          >
            Messages
          </button>



        </nav>



        <div className="mt-auto pt-10">
          <button className="w-full text-sm text-red-600 hover:underline">
            Logout
          </button>
        </div>


      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden ">

        {/* DESKTOP HEADER */}
        <header className="md:flex bg-white shadow-sm border-b px-6 py-4 justify-between items-center">

          <div className="md:hidden" >
            <button
              onClick={() => {
                setPages("team")
                setMobileOpen(false)
              }}
              className={`w-full text-left px-4 py-2 rounded-lg text-sm transition 
          ${pages === "team"
                  ? "bg-[#D4AF37] text-white"
                  : "hover:bg-gray-100"
                }`}
            >
              Team
            </button>

            <button
              onClick={() => {
                setPages("messages")
                setMobileOpen(false)
              }}
              className={`w-full text-left px-4 py-2 rounded-lg text-sm transition 
          ${pages === "messages"
                  ? "bg-[#D4AF37] text-white"
                  : "hover:bg-gray-100"
                }`}
            >
              Messages
            </button>

          </div> <br />

          <h1 className="text-2xl font-bold text-[#D4AF37]">
            {pages === "messages" ? "Contact Messages" : "Team Management"}
          </h1>




          {pages === "team" && (
            <button
              className="bg-[#D4AF37] text-white px-4 py-2 rounded-lg flex items-center hover:opacity-90 transition"
              onClick={() => setShowAddForm(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Team
            </button>
          )}
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 mt-14 md:mt-0">

          {pages === "team" && (
            <ServiceManager
              services={services}
              loading={loading}
              showAddForm={showAddForm}
              onAddService={handleAddService}
              onUpdateService={handleUpdateService}
              onDeleteService={handleDeleteService}
              onCloseAddForm={() => setShowAddForm(false)}
            />
          )}

          {pages === "messages" && (
            <ContactManager
              messages={messages}
              loading={loading}
              onRefresh={fetchMessages}
            />
          )}

        </main>
      </div>
    </div>
  )
}