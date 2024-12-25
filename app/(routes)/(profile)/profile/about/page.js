export default function page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-2 items-center">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <button className="btn">Edit</button>
        </div>
        {/* Personal Information */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Work</h3>

            <p className="text-gray-600">
              Full Stack Developer at <b>Freelance</b>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Education</h3>
            <input
              type="text"
              placeholder="B.Sc in Computer Science"
              className="w-full md:w-1/2 outline-none border variable-btn bg-boxColor"
            />
            <p className="text-gray-600">B.Sc in Computer Science</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Location</h3>

            <p className="text-gray-600">Dhaka, Bangladesh</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Skills</h3>

            <p className="text-gray-600">
              JavaScript, React, Next.js, Tailwind CSS, Node.js
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Bio</h3>
            {/* <textarea
              type="text"
              placeholder="B.Sc in Computer Science"
              className="w-full md:w-1/2 outline-none border variable-btn bg-boxColor"
              rows={4}
              defaultValue={
                "I am a passionate developer who loves building web applications with modern frameworks and technologies. I enjoy learning new things and delivering high-quality products to my clients."
              }
            /> */}
            <p className="text-gray-600 leading-relaxed">
              I am a passionate developer who loves building web applications
              with modern frameworks and technologies. I enjoy learning new
              things and delivering high-quality products to my clients.
            </p>
          </div>
          <div>
            <button className="btn">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}
