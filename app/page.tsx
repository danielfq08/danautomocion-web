import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-4">
      <Image src="/logo.png" alt="Danautomoción Logo" width={100} height={100} className="mb-6" />
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Bienvenido a Danautomoción</h1>
      <p className="text-gray-600 mb-8 text-lg">Selecciona tu idioma</p>
      <div className="flex gap-6">
        <Link href="/es">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg shadow-md">
            Español
          </button>
        </Link>
        <Link href="/en">
          <button className="bg-gray-200 hover:bg-gray-300 text-blue-900 px-6 py-3 rounded text-lg shadow-md">
            English
          </button>
        </Link>
      </div>
    </div>
  );
}