import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-yellow-300">Move & Groove</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Connecting dancers with the best classes in town.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Our <span className="text-pink-600 dark:text-pink-400">Mission</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            To make dance accessible to everyone. Whether you're a beginner looking to try something new,
            or an experienced dancer wanting to refine your skills, Move & Groove connects you with
            passionate instructors and vibrant studios in your area.
          </motion.p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-800 dark:text-white">
              Our <span className="text-pink-600 dark:text-pink-400">Values</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-800 dark:text-white">
            Meet the <span className="text-pink-600 dark:text-pink-400">Team</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {member.name}
              </h3>
              <p className="text-pink-600 dark:text-pink-400 text-sm">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

const values = [
  {
    icon: '💃',
    title: 'Passion',
    description: 'We love dance and believe everyone should experience its joy.',
  },
  {
    icon: '🤝',
    title: 'Community',
    description: 'We connect dancers, instructors, and studios into one vibrant community.',
  },
  {
    icon: '🌟',
    title: 'Excellence',
    description: 'We partner with the best instructors and studios in the industry.',
  },
];

const team = [
  {
    name: 'Maria Rodriguez',
    role: 'Founder & Lead Instructor',
    bio: 'Salsa expert with 15+ years of experience. Passionate about making dance accessible.',
    avatar: 'https://i.pravatar.cc/150?img=10',
  },
  {
    name: 'Jay Thompson',
    role: 'Hip-Hop Director',
    bio: 'Urban dance specialist. Known for high-energy classes and creative choreography.',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Elena Volkova',
    role: 'Ballet Program Lead',
    bio: 'Classically trained dancer with a love for teaching adults.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
];