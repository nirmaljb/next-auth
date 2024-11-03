"use client"

import { Github, Mail } from "lucide-react";
import { signIn } from "next-auth/react";


export default function Signin() {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Sign in</h2>
        <p className="text-gray-600 mt-2">Choose your preferred sign in method</p>
      </div>

      <div className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button onClick={async() => {
            await signIn("credentials", {
                username: '',
                password: '',
                redirect: false
            })
        }} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
          Sign in
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-200" onClick={async() => await signIn("google")}>
            <Mail className="w-5 h-5 mr-2" />
            Google
          </button>
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-200" onClick={async() => await signIn("github")}>
            <Github className="w-5 h-5 mr-2" />
            Github
          </button>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-600 text-sm">
          Don't have an account?{' '}
          <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
            Sign up
          </a>
        </p>
      </div>
    </div>
  </div>
}