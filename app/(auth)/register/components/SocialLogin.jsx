export default function SocialLogin() {
    return (
      <div className="mt-6 grid grid-cols-2 gap-3">
        <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <svg className="w-5 h-5" fill="#4285F4" viewBox="0 0 24 24">
            <path d="M12.545,12.151L12.545,12.151c0,1.054,0.855,1.909,1.909,1.909h3.536c-0.332,1.512-1.745,2.483-3.446,2.483 c-2.058,0-3.726-1.518-3.726-3.576s1.669-3.576,3.726-3.576c0.929,0,1.784,0.347,2.436,0.92l1.363-1.363 C13.45,8.057,12.054,7.5,10.545,7.5c-3.038,0-5.5,2.462-5.5,5.5s2.462,5.5,5.5,5.5c3.038,0,5.5-2.462,5.5-5.5v-0.849H12.545z"></path>
          </svg>
          <span className="ml-2 font-bengali">গুগল</span>
        </button>
        <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M20.007,12c0-4.418-3.582-8-8-8s-8,3.582-8,8c0,3.984,2.91,7.288,6.716,7.878v-5.572h-2.025V12h2.025V9.977 c0-1.998,1.191-3.101,3.009-3.101c0.871,0,1.783,0.156,1.783,0.156v1.958h-1.003c-0.99,0-1.299,0.614-1.299,1.243V12h2.211 l-0.353,2.306h-1.858v5.572C17.097,19.288,20.007,15.984,20.007,12z"></path>
          </svg>
          <span className="ml-2 font-bengali">ফেসবুক</span>
        </button>
      </div>
    )
  }
  