import ServiceCard from '../components/ServiceCard';

const services = [
  {
    id: 1,
    title: 'New Laptops',
    description: 'Latest models from top brands',
    image: 'https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: true
  },
  {
    id: 2,
    title: 'Refurbished Laptops',
    description: 'Quality restored laptops at great prices',
    image: 'https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: true
  },
  {
    id: 3,
    title: 'Laptop Repairs',
    description: 'Expert repair services',
    image: 'https://images.pexels.com/photos/10558598/pexels-photo-10558598.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: false
  },
  {
    id: 4,
    title: 'Laptop Parts',
    description: 'Genuine replacement parts',
    image: 'https://images.pexels.com/photos/7639370/pexels-photo-7639370.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: true
  },
  {
    id: 5,
    title: 'Trade-In',
    description: 'Trade your old laptop for a new one',
    image: 'https://images.pexels.com/photos/3550484/pexels-photo-3550484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: false
  },
  {
    id: 6,
    title: 'Laptop Chargers',
    description: 'Original and compatible chargers',
    image: 'https://m.media-amazon.com/images/I/61e9j-r6SIL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    price: true
  },
  {
    id: 7,
    title: 'Data Recovery',
    description: 'Recover your important data',
    image: 'https://images.pexels.com/photos/9242893/pexels-photo-9242893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: false
  },
  {
    id: 8,
    title: 'Upgrades',
    description: 'RAM, SSD, and performance upgrades',
    image: 'https://images.pexels.com/photos/6373758/pexels-photo-6373758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: true
  },
  {
    id: 9,
    title: 'Diagnostics',
    description: 'Professional laptop diagnostics',
    image: 'https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: false
  },
  {
    id: 10,
    title: 'Network Services',
    description: 'Routers, switches, LAN cables, WiFi setup',
    image: 'https://images.pexels.com/photos/12003537/pexels-photo-12003537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: true
  },
];

function Services() {
  return (
    <section id="services-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;