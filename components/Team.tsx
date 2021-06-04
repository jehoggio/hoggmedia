const people = [
  {
    name: 'Jeff Hogg',
    role: 'Founder/ CEO',
    imageUrl: '/images/me.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/jeffhogg/',
  },
  // More people...
];

export default function Team() {
  return (
    <div className="text-center space-y-12">
      <div className="text-center max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
          Team
        </p>
        <p className="max-w-xl mt-5 mx-auto text-xl ">
          We talk about coding, tech and video production
        </p>
      </div>
      <ul>
        {people.map(person => (
          <li key={person.name}>
            <div className="space-y-4 flex flex-col items-center">
              <img
                className="h-48 rounded-full shadow-lg"
                src={person.imageUrl}
                alt={person.name}
              />

              <div className="space-y-2">
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3>{person.name}</h3>
                  <p className="text-indigo-600">{person.role}</p>
                </div>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
