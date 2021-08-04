export default function App({ children }) {
  return (
      <main className="flex flex-col items-center justify-center w-full flex-1 md:px-20 lg:px-40 text-center bg-gray-400 h-full min-h-screen">
        {children}
      </main>
  )
}
