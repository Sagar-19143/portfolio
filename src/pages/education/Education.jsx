

const Education = () => {
    return (
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-0 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                {/* <h3 className="absolute left-0 text-lg font-semibold">2015</h3> */}
                <h1 className="text-xl">Masters in Computer Science</h1>
                <p className="text-gray-400">University of South Dakota.</p>
                <p>
                Courses undertaken till now Info storage and retrieval, High preference systems
                </p>
              </div>
              {/* <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Underwent a digital marketing course and started to work as a
                  PPC and project manager in a local web studio. After 3 months
                  started my own freelance practice.
                </p>
              </div> */}
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                {/* <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Became more interested in IT and decided to try programming.
                  Underwent Java course and made a project.
                </p> */}
                 <h1 className="text-xl">Bachelors in Computer Science and Engineering</h1>
                <p className="text-gray-400">CMR Technical Campus, Hyderabad Telangana India</p>
                <p>Courses undertaken Data Strucutures and Algorithms, Operating Systems, Database Management Systems, Networks, Distributed Computing, Object Oriented Programming, Computer Architecture.</p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px] after:w-4 after:h-4 after:bg-gradient-to-t after:from-blue-100 after:to-cyan-100 after:absolute after:rounded-full after:left-[58px]">
                {/* <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Worked out in which field I want to build a developer's career
                  and started to learn Frontend Development.
                </p> */}
                <h1 className="text-xl">Intermediate</h1>
                <p className="text-gray-400">Board of Secondary Education, Telangana</p>
                <p>Courses undertaken Physics, Chemistry and Mathematics.</p>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Education;