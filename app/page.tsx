import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center">
      <Head>
        <title>Abhyas Job Openings</title>
      </Head>

      <main className="text-center m-2 p-2">
        <img
          src="https://www.abhyaz.com/Abhyaz.logo.jpg"
          alt="Abhyas Job Openings"
          className="w-1/2 mx-auto mb-8 rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-semibold mb-6">Welcome to Abhyas Job Openings</h1>
        <p className="text-lg text-gray-700 mb-2">
          Explore exciting job opportunities at Abhyas and join our team of talented professionals.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          We have job opportunities for:
        </p>
        <ul className="text-lg text-gray-700 mb-6 flex items-center justify-center sm:flex-row flex-col">
          <li className="mb-2">
            <span className="bg-black text-white font-semibold px-2 py-1 rounded-md mr-2">
              Web Developers
            </span>
          </li>
          <li className="mb-2">
            <span className="bg-black text-white font-semibold px-2 py-1 rounded-md mr-2">
              System Engineers
            </span>
          </li>
          <li className="mb-2">
            <span className="bg-black text-white font-semibold px-2 py-1 rounded-md mr-2">
              Test Engineers
            </span>
            <span className="bg-black text-white font-semibold px-2 py-1 rounded-md mr-2">
              Many more...
            </span>
          </li>
        </ul>
        <p className="text-lg text-gray-700 mb-8">
          At Abhyas, we are here to help you build your true potential and excel in your career.
        </p>
        <Link href="/listing" className="bg-black hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full text-lg transition duration-300 mb-4 inline-block">
          View Job Openings
        </Link>
        <div className="flex justify-center space-x-4">
          <Link
            href="#"
            className="text-blue-500 hover:text-blue-700 text-xl"
          >
            <i className="fab fa-facebook"></i>
          </Link>
          <Link
            href="#"
            className="text-blue-500 hover:text-blue-700 text-xl"
          >
            <i className="fab fa-twitter"></i>
          </Link>
          <Link
            href="#"
            className="text-blue-500 hover:text-blue-700 text-xl"
          >
            <i className="fab fa-linkedin"></i>
          </Link>
        </div>

      </main>
    </div>
  );
}
