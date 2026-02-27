"use client"

import { useState, useEffect } from "react"
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore"
import { Plus } from "lucide-react"
import { db } from "../components/Helpers/firebase"
import { ServiceManager } from "../components/Admin/AdminServiceManager"

export default function Admin() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddForm, setShowAddForm] = useState(false)

  useEffect(() => {
    fetchServices()
  }, [])

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

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">

        <header className="bg-white shadow-sm border-b">
          <div className="flex justify-between px-6 py-4">
            <h1 className="text-2xl font-bold text-[#D4AF37]">
              Manage Services
            </h1>

            <button
              className="bg-[#D4AF37] border rounded-lg px-3 py-2 text-white flex items-center hover:bg-[#D4AF37]-800 transition"
              onClick={() => setShowAddForm(true)}
            >
              <Plus className="h-4 w-4 mr-2 " />
              Add Service
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <ServiceManager
            services={services}
            loading={loading}
            showAddForm={showAddForm}
            onAddService={handleAddService}
            onUpdateService={handleUpdateService}
            onDeleteService={handleDeleteService}
            onCloseAddForm={() => setShowAddForm(false)}
          />
        </main>
      </div>
    </div>
  )
}