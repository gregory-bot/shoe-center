import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ServiceCard({ service }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden w-full"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
        <Link
          to={`/service/${service.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm"
        >
          check out more
        </Link>
      </div>
    </motion.div>
  );
}

export default ServiceCard;