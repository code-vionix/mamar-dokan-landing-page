export async function loginUser(email, password) {
    // In a real app, you would call your backend API here
    // For now, we'll just simulate a successful login
  
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800))
  
    // Validate credentials (simple validation)
    if (!email || !password) {
      throw new Error("Email and password are required")
    }
  
    if (password.length < 6) {
      throw new Error("Invalid credentials")
    }
  
    // Return mock successful response
    return {
      token: "mock-jwt-token",
      user: {
        id: "1",
        name: "Test User",
        email: email,
        role: "USER"
      }
    }
  }
  
  export async function registerUser(name, email, password) {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
  
    // Validate inputs
    if (!name || !email || !password) {
      throw new Error("All fields are required")
    }
  
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters")
    }
  
    // Return mock successful response
    return {
      token: "mock-jwt-token",
      user: {
        id: "1",
        name: name,
        email: email,
        role: "USER"
      }
    }
  }
  
  export function getUser() {
    // In a real app, decode the JWT token and verify it
    // For now, just check if we have a token in localStorage
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("userToken")
      const email = localStorage.getItem("userEmail")
  
      if (token && email) {
        return {
          id: "1",
          name: "Test User",
          email: email,
          role: "USER"
        }
      }
    }
  
    return null
  }
  
  export function logout() {
    // Remove user data from localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("userToken")
      localStorage.removeItem("userEmail")
    }
  }
  