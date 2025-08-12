function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            About Us
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are a passionate team of developers dedicated to creating amazing web applications. 
              Our mission is to build user-friendly, performant, and beautiful digital experiences 
              that make a difference in people's lives.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2024, we've been at the forefront of web development innovation, 
              constantly learning and adapting to new technologies to deliver the best possible solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To create exceptional digital experiences that empower users and drive business growth 
                through innovative web solutions and cutting-edge technology.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading force in web development, setting industry standards for 
                user experience, performance, and technological excellence.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Our Values
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="font-semibold text-gray-800 mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">
                  Constantly pushing boundaries and exploring new technologies
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-semibold text-gray-800 mb-2">Collaboration</h4>
                <p className="text-gray-600 text-sm">
                  Working together to achieve exceptional results
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold text-gray-800 mb-2">Excellence</h4>
                <p className="text-gray-600 text-sm">
                  Striving for the highest quality in everything we do
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 