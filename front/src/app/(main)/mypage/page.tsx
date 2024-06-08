"use client";
import Image from "next/image";

export default function Mypage() {
  return (
    <div className="overflow-x-auto max-w-[1000px] mx-auto p-6">
      <div className="overflow-x-auto mb-6">
        <h1 className="text-3xl font-bold text-center mb-4">My Profile</h1>
        <div className="flex justify-center mb-4">
          <Image
            src="/assets/images/bilguun.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full shadow-md"
          />
        </div>
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="px-4 py-2 font-semibold">Name</td>
              <td className="px-4 py-2">Munkh</td>
            </tr>
            {/* row 2 */}
            <tr className="bg-gray-50">
              <td className="px-4 py-2 font-semibold">Gender</td>
              <td className="px-4 py-2">Male</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td className="px-4 py-2 font-semibold">Birthday</td>
              <td className="px-4 py-2">1995-01-01</td>
            </tr>
            {/* row 4 */}
            <tr className="bg-gray-50">
              <td className="px-4 py-2 font-semibold">Location</td>
              <td className="px-4 py-2">Ulaanbaatar, Mongolia</td>
            </tr>
            {/* row 5 */}
            <tr>
              <td className="px-4 py-2 font-semibold">Email</td>
              <td className="px-4 py-2">munkh@example.com</td>
            </tr>
            {/* row 6 */}
            <tr className="bg-gray-50">
              <td className="px-4 py-2 font-semibold">Phone</td>
              <td className="px-4 py-2">+976 1234 5678</td>
            </tr>
            {/* row 7 */}
            <tr>
              <td className="px-4 py-2 font-semibold">Occupation</td>
              <td className="px-4 py-2">Software Developer</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          Hello! My name is Munkh. I am a software developer based in Ulaanbaatar, Mongolia. I have a passion for creating innovative solutions and have been working in the tech industry for over 5 years. In my free time, I enjoy hiking, reading, and exploring new technologies.
        </p>
      </div>
    </div>
  );
}
