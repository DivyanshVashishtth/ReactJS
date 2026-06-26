import React from 'react'

function Card({username , btntext = "Visit me"}) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
  <div className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-2xl">
    <img 
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800"
      alt="Nature"
      className="h-60 w-full object-cover"
    />

    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800">
        {username}
      </h2>

      <p className="mt-3 text-gray-600">
        Discover breathtaking landscapes and experience the beauty of nature.
      </p>

      <button className="mt-5 rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700">
        {btntext}
      </button>
    </div>
  </div>
</div>
    )
}

export default Card
