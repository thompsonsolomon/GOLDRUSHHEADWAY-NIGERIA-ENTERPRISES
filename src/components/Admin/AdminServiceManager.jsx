import { useState } from "react"

export function ServiceManager({
  services,
  loading,
  showAddForm,
  onAddService,
  onUpdateService,
  onDeleteService,
  onCloseAddForm,
}) {
  const [editingService, setEditingService] = useState(null)
  const [uploading, setUploading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    contact: "",
    role: "",
    images: [],
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  // 🔥 Cloudinary Upload
  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files)
    setUploading(true)

    try {
      const uploadPromises = files.map(async (file) => {
        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: data,
          }
        )

        const result = await res.json()
        return result.secure_url
      })

      const imageUrls = await Promise.all(uploadPromises)

      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...imageUrls],
      }))
    } catch (err) {
      console.error(err)
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const serviceData = {
      ...formData,
    }

    if (editingService) {
      await onUpdateService(editingService.id, serviceData)
      setEditingService(null)
    } else {
      await onAddService(serviceData)
    }

    setFormData({
      name: "",
      description: "",
      contact: "",
      role: "",
      images: [],
    })
  }

  const startEdit = (service) => {
    setEditingService(service)
    setFormData({
      name: service.name || "",
      description: service.description || "",
      contact: service.contact || "",
      role: service.role || "",
      images: service.images || [],
    })
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">

      {/* FORM */}
      {(showAddForm || editingService) && (
        <div className="bg-white p-6 rounded-xl shadow-md border">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              {editingService ? "Edit Service" : "Add New Service"}
            </h2>
            <button
              onClick={() => {
                setEditingService(null)
                onCloseAddForm()
              }}
              className="text-gray-500 hover:text-red-500 "
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black outline-none"
                />
              </div>


              <div>
                <label className="block text-sm mb-1">Contact</label>
                <input
                  type="number"
                  name="contact"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black outline-none"
                />
              </div>





            </div>

            <div>
              <label className="block text-sm mb-1">Description</label>
              <textarea
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>



            <div>
              <label className="block text-sm mb-2">Upload Profile</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="block w-full text-sm"
              />

              {uploading && (
                <p className="text-sm text-gray-500 mt-2">Uploading...</p>
              )}

              {formData.images.length > 0 && (
                <div className="flex gap-3 mt-4 flex-wrap">
                  {formData.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="preview"
                      className="w-20 h-20 object-cover rounded-lg border"
                    />
                  ))}
                </div>
              )}
            </div>


            <button
              type="submit"
              disabled={uploading}
              className="bg-[#D4AF37] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              {editingService ? "Update Service" : "Add Team"}
            </button>
          </form>
        </div>
      )}

      {/* SERVICES GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-md border overflow-hidden"
          >
            {service.images?.[0] && (
              <img
                src={service.images[0]}
                alt={service.title}
                className="w-full h-40 object-cover"
              />
            )}

            <div className="p-4 space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg"> {service.name}</h3>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2">
                <span>Description: </span>

                {service.description}
              </p>


              <p className="text-sm text-gray-600 line-clamp-2">
                <span>Role: </span>
                {service.role}
              </p>




              <div className="flex gap-3 pt-3">
                <button
                  onClick={() => startEdit(service)}
                  className="text-blue-600 text-sm hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteService(service.id)}
                  className="text-red-600 text-sm hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {services.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No Team member  yet.
        </div>
      )}
    </div>
  )
}