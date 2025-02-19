import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ServiceCard from '../components/ServiceCard';

const newLaptops = [
  {
    id: 'nl1',
    title: 'Dell XPS 13',
    description: 'Latest model with Intel i7, 16GB RAM',
    price: 1299.99,
    image: 'https://images.pexels.com/photos/9474023/pexels-photo-9474023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'nl2',
    title: 'MacBook Pro M2',
    description: '14-inch, 512GB SSD, Space Gray',
    price: 1999.99,
    image: 'https://images.pexels.com/photos/7454629/pexels-photo-7454629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'nl3',
    title: 'Lenovo ThinkPad X1',
    description: 'Carbon Gen 10, 1TB SSD',
    price: 1599.99,
    image: 'https://images.pexels.com/photos/9229975/pexels-photo-9229975.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'nl4',
    title: 'Dell XPS 15',
    description: 'Intel Core i7, 16GB RAM, 512GB SSD',
    price: 1799.99,
    image: 'https://images.pexels.com/photos/4078342/pexels-photo-4078342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'nl5',
    title: 'HP Spectre x360',
    description: '2-in-1, 16GB RAM, 1TB SSD',
    price: 1699.99,
    image: 'https://images.pexels.com/photos/4929838/pexels-photo-4929838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'nl6',
    title: 'Apple MacBook Air M2',
    description: '13-inch, 256GB SSD, Midnight Blue',
    price: 1249.99,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'nl7',
    title: 'ASUS ROG Zephyrus G14',
    description: 'AMD Ryzen 9, RTX 4060, 1TB SSD',
    price: 1899.99,
    image: 'https://images.pexels.com/photos/14328581/pexels-photo-14328581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'nl8',
    title: 'Acer Swift 5',
    description: 'Intel Evo, 16GB RAM, 512GB SSD',
    price: 1299.99,
    image: 'https://images.pexels.com/photos/169484/pexels-photo-169484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'nl9',
    title: 'Microsoft Surface Laptop 5',
    description: 'Intel i7, 16GB RAM, 512GB SSD',
    price: 1599.99,
    image: 'https://images.pexels.com/photos/4195403/pexels-photo-4195403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'nl10',
    title: 'Razer Blade 15',
    description: 'Intel Core i9, RTX 4080, 1TB SSD',
    price: 2499.99,
    image: 'https://images.pexels.com/photos/30530411/pexels-photo-30530411/free-photo-of-laptop-displaying-ai-conversation-interface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'nl11',
    title: 'Lenovo Legion 5 Pro',
    description: 'AMD Ryzen 7, RTX 3070, 16GB RAM',
    price: 1799.99,
    image: 'https://images.pexels.com/photos/19269761/pexels-photo-19269761/free-photo-of-laptop-on-a-pink-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'nl12',
    title: 'Samsung Galaxy Book3 Ultra',
    description: 'Intel i7, AMOLED Display, 512GB SSD',
    price: 1499.99,
    image: 'https://images.pexels.com/photos/9124982/pexels-photo-9124982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'nl13',
    title: 'LG Gram 17',
    description: 'Ultra-lightweight, Intel i7, 1TB SSD',
    price: 1699.99,
    image: 'https://images.pexels.com/photos/6446708/pexels-photo-6446708.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
  
];

const refurbishedLaptops = [
  {
    id: 'rl1',
    title: 'Dell Latitude 7420',
    description: 'Refurbished, Intel i5, 8GB RAM, 256GB SSD',
    price: 699.99,
    image: 'https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rl2',
    title: 'HP EliteBook 840 G5',
    description: 'Refurbished, Intel i7, 16GB RAM, 512GB SSD',
    price: 749.99,
    image: 'https://images.pexels.com/photos/7583935/pexels-photo-7583935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rl3',
    title: 'Lenovo ThinkPad T480',
    description: 'Refurbished, Intel i5, 16GB RAM, 512GB SSD',
    price: 679.99,
    image: 'https://images.pexels.com/photos/3550482/pexels-photo-3550482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rl4',
    title: 'Apple MacBook Pro 2019',
    description: 'Refurbished, Intel i7, 16GB RAM, 512GB SSD',
    price: 999.99,
    image: 'https://images.pexels.com/photos/6192119/pexels-photo-6192119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rl5',
    title: 'ASUS ZenBook 14',
    description: 'Refurbished, Intel i7, 8GB RAM, 256GB SSD',
    price: 729.99,
    image: 'https://images.pexels.com/photos/14328581/pexels-photo-14328581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rl6',
    title: 'Acer Aspire 5',
    description: 'Refurbished, AMD Ryzen 5, 8GB RAM, 256GB SSD',
    price: 599.99,
    image: 'https://images.pexels.com/photos/6452/laptop-notebook-technology-white-6452.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rl7',
    title: 'Microsoft Surface Laptop 3',
    description: 'Refurbished, Intel i5, 8GB RAM, 256GB SSD',
    price: 799.99,
    image: 'https://images.pexels.com/photos/19826625/pexels-photo-19826625/free-photo-of-laptop-with-social-media-icon-on-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rl8',
    title: 'HP Pavilion x360',
    description: 'Refurbished, Intel i5, 8GB RAM, 256GB SSD',
    price: 649.99,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rl9',
    title: 'Dell Inspiron 15',
    description: 'Refurbished, Intel i5, 8GB RAM, 512GB SSD',
    price: 719.99,
    image: 'https://images.pexels.com/photos/1466609/pexels-photo-1466609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rl10',
    title: 'Lenovo IdeaPad Flex 5',
    description: 'Refurbished, AMD Ryzen 7, 16GB RAM, 512GB SSD',
    price: 779.99,
    image: 'https://images.pexels.com/photos/1359327/pexels-photo-1359327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rl11',
    title: 'Razer Blade Stealth 13',
    description: 'Refurbished, Intel i7, 16GB RAM, 512GB SSD',
    price: 999.99,
    image: 'https://images.pexels.com/photos/7583935/pexels-photo-7583935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rl12',
    title: 'Samsung Galaxy Book S',
    description: 'Refurbished, Qualcomm Snapdragon, 8GB RAM, 256GB SSD',
    price: 699.99,
    image: 'https://images.pexels.com/photos/8534382/pexels-photo-8534382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const laptopRepairs = [
  {
    id: 'lr1',
    title: 'Screen Replacement',
    description: 'Fix cracked or damaged laptop screens',
    price: 129.99,
    image: 'https://images.pexels.com/photos/28379997/pexels-photo-28379997/free-photo-of-a-person-holding-a-laptop-with-a-broken-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'lr2',
    title: 'Battery Replacement',
    description: 'Replace old or faulty laptop batteries',
    price: 79.99,
    image: 'https://media.istockphoto.com/id/1036966424/photo/laptop-service-removal-of-the-battery-by-a-service-technician-tools-lie-on-the-table.jpg?s=1024x1024&w=is&k=20&c=1bMGQ3d8U8nvemKLBOZc05AigIhD7XTzzh7bnNQq79U='
  },
  {
    id: 'lr3',
    title: 'Keyboard Repair',
    description: 'Fix unresponsive or broken keys',
    price: 59.99,
    image: 'https://images.pexels.com/photos/5805495/pexels-photo-5805495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'lr4',
    title: 'Motherboard Repair',
    description: 'Repair faulty or damaged motherboard circuits',
    price: 199.99,
    image: 'https://images.pexels.com/photos/9242885/pexels-photo-9242885.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'lr5',
    title: 'Hard Drive Replacement',
    description: 'Upgrade or replace laptop hard drives',
    price: 99.99,
    image: 'https://images.pexels.com/photos/15554492/pexels-photo-15554492/free-photo-of-cooling-system-inside-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'lr6',
    title: 'RAM Upgrade',
    description: 'Boost your laptop’s performance with more RAM',
    price: 49.99,
    image: 'https://images.pexels.com/photos/7594824/pexels-photo-7594824.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'lr7',
    title: 'Fan and Cooling System Repair',
    description: 'Fix overheating issues with fan replacements',
    price: 69.99,
    image: 'https://images.pexels.com/photos/15554492/pexels-photo-15554492/free-photo-of-cooling-system-inside-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'lr8',
    title: 'Laptop Hinge Repair',
    description: 'Fix broken or loose hinges for smooth closing',
    price: 89.99,
    image: 'https://images.pexels.com/photos/7639360/pexels-photo-7639360.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'lr9',
    title: 'Virus and Malware Removal',
    description: 'Clean and protect your laptop from threats',
    price: 49.99,
    image: 'https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'lr10',
    title: 'Data Recovery Services',
    description: 'Recover lost or deleted files from damaged drives',
    price: 149.99,
    image: 'https://images.pexels.com/photos/27691024/pexels-photo-27691024/free-photo-of-home-studio-equipment-data-storage-backup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'lr11',
    title: 'Operating System Installation',
    description: 'Reinstall or upgrade your OS',
    price: 59.99,
    image: 'https://images.pexels.com/photos/7596370/pexels-photo-7596370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'lr12',
    title: 'Power Jack Repair',
    description: 'Fix charging issues due to broken jacks',
    price: 69.99,
    image: 'https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const laptopParts = [
  {
    id: 'lp1',
    title: 'Laptop Battery',
    description: 'Compatible with Dell XPS series',
    price: 79.99,
    image: 'https://images.pexels.com/photos/8325381/pexels-photo-8325381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'lp2',
    title: 'Laptop Charger',
    description: '65W charger for HP Pavilion & Envy series',
    price: 49.99,
    image: 'https://media.istockphoto.com/id/605989924/photo/laptop-charger-cable.jpg?s=1024x1024&w=is&k=20&c=IyoEPVszKwmEd0OEEFZQipaRZZrPg4-AAnRg8kijloI='
  },
  {
    id: 'lp3',
    title: 'SSD 1TB',
    description: 'NVMe M.2 SSD for ultrafast performance',
    price: 129.99,
    image: 'https://images.pexels.com/photos/28666524/pexels-photo-28666524/free-photo-of-high-performance-nvme-ssd-on-gray-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'lp4',
    title: '16GB RAM Module',
    description: 'DDR4 3200MHz memory for laptops',
    price: 89.99,
    image: 'https://images.pexels.com/photos/6636474/pexels-photo-6636474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'lp5',
    title: 'Laptop Cooling Pad',
    description: 'Ergonomic cooling pad with dual fans',
    price: 39.99,
    image: 'https://images.pexels.com/photos/15554492/pexels-photo-15554492/free-photo-of-cooling-system-inside-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'lp6',
    title: 'Laptop Keyboard',
    description: 'Replacement keyboard for Lenovo ThinkPad',
    price: 59.99,
    image: 'https://images.pexels.com/photos/30555458/pexels-photo-30555458/free-photo-of-close-up-of-an-arabic-keyboard-layout.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'lp7',
    title: 'Laptop Screen 15.6”',
    description: '1080p IPS display replacement panel',
    price: 149.99,
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'lp8',
    title: 'External Hard Drive 2TB',
    description: 'Portable USB 3.0 storage for backups',
    price: 99.99,
    image: 'https://images.pexels.com/photos/3361486/pexels-photo-3361486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'lp9',
    title: 'Wireless Mouse',
    description: 'Ergonomic Bluetooth mouse with precision sensor',
    price: 29.99,
    image: 'https://images.pexels.com/photos/5082573/pexels-photo-5082573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'lp10',
    title: 'Laptop Stand',
    description: 'Adjustable aluminum stand for better ergonomics',
    price: 34.99,
    image: 'https://images.pexels.com/photos/968631/pexels-photo-968631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const tradeIn = [
  {
    id: 'ti1',
    title: 'Trade-in MacBook Pro 2021',
    description: 'Get up to $1000 for your used MacBook Pro',
    price: 'Up to $1000',
    image: 'https://images.pexels.com/photos/7454629/pexels-photo-7454629.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'ti2',
    title: 'Trade-in Dell XPS 15',
    description: 'Exchange your Dell XPS for credit towards a new laptop',
    price: 'Up to $700',
    image: 'https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'ti3',
    title: 'Trade-in HP Spectre x360',
    description: 'Get trade-in value for your HP Spectre series laptop',
    price: 'Up to $550',
    image: 'https://images.pexels.com/photos/17706646/pexels-photo-17706646/free-photo-of-news-on-laptop-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'ti4',
    title: 'Trade-in Lenovo ThinkPad X1 Carbon',
    description: 'Trade in your ThinkPad for store credit or cash',
    price: 'Up to $600',
    image: 'https://images.pexels.com/photos/3550482/pexels-photo-3550482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'ti5',
    title: 'Trade-in Asus ROG Zephyrus',
    description: 'Exchange your gaming laptop for a newer model',
    price: 'Up to $750',
    image: 'https://images.pexels.com/photos/4760964/pexels-photo-4760964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'ti6',
    title: 'Trade-in Microsoft Surface Laptop 4',
    description: 'Get trade-in value for your Surface Laptop',
    price: 'Up to $500',
    image: 'https://images.pexels.com/photos/19826625/pexels-photo-19826625/free-photo-of-laptop-with-social-media-icon-on-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'ti7',
    title: 'Trade-in Acer Predator Helios 300',
    description: 'Trade in your gaming laptop for store credit',
    price: 'Up to $650',
    image: 'https://images.pexels.com/photos/169484/pexels-photo-169484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'ti8',
    title: 'Trade-in Alienware m15',
    description: 'Get up to $800 for your used Alienware laptop',
    price: 'Up to $800',
    image: 'https://images.pexels.com/photos/30530401/pexels-photo-30530401/free-photo-of-macbook-with-ai-chat-application-on-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'ti9',
    title: 'Trade-in MSI GS66 Stealth',
    description: 'Trade in your MSI gaming laptop for a discount on a new one',
    price: 'Up to $700',
    image: 'https://images.pexels.com/photos/30555617/pexels-photo-30555617/free-photo-of-arabic-and-english-keyboard-design-close-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'ti10',
    title: 'Trade-in Old Laptops (Any Brand)',
    description: 'Trade in any old laptop, working or non-working',
    price: 'Varies',
    image: 'https://images.pexels.com/photos/13222553/pexels-photo-13222553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const laptopChargers = [
  {
    id: 'lc1',
    title: 'MacBook Pro Charger (USB-C 96W)',
    description: 'Original Apple 96W USB-C charger for MacBook Pro 16-inch',
    price: '$79',
    image: 'https://m.media-amazon.com/images/I/313TiasRS5L._SY445_SX342_QL70_FMwebp_.jpg'
  },
  {
    id: 'lc2',
    title: 'Dell XPS Charger (130W USB-C)',
    description: 'Dell Original USB-C 130W charger for XPS 15 and 17',
    price: '$65',
    image: 'https://m.media-amazon.com/images/I/51maAkUzY7L.__AC_SY300_SX300_QL70_FMwebp_.jpg'
  },
  {
    id: 'lc3',
    title: 'HP Spectre x360 Charger (65W USB-C)',
    description: 'Official HP 65W USB-C power adapter for Spectre series',
    price: '$60',
    image: 'https://m.media-amazon.com/images/I/81n5nfiwHUL._AC_SX425_.jpg'
  },
  {
    id: 'lc4',
    title: 'Lenovo ThinkPad Charger (90W)',
    description: 'Genuine Lenovo 90W AC adapter for ThinkPad laptops',
    price: '$50',
    image: 'https://m.media-amazon.com/images/I/61dI8pZTalL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id: 'lc5',
    title: 'Asus ROG Charger (200W)',
    description: 'High-performance 200W adapter for Asus ROG gaming laptops',
    price: '$85',
    image: 'https://m.media-amazon.com/images/I/51CRLfuOYyL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id: 'lc6',
    title: 'Microsoft Surface Charger (65W)',
    description: 'Official Microsoft 65W power adapter for Surface Laptop 3 & 4',
    price: '$70',
    image: 'https://m.media-amazon.com/images/I/61i2cWnohUL._AC_SX425_.jpg'
  },
  {
    id: 'lc7',
    title: 'Acer Predator Charger (180W)',
    description: 'High-wattage power adapter for Acer Predator Helios 300',
    price: '$75',
    image: 'https://m.media-amazon.com/images/I/61N2hg47QWL.__AC_SY300_SX300_QL70_FMwebp_.jpg'
  },
  {
    id: 'lc8',
    title: 'Alienware m15 Charger (240W)',
    description: 'Original Alienware 240W power adapter for gaming laptops',
    price: '$95',
    image: 'https://m.media-amazon.com/images/I/71bigjQlF5L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id: 'lc9',
    title: 'MSI Gaming Laptop Charger (180W)',
    description: 'Genuine MSI charger for GS66 Stealth and other gaming models',
    price: '$80',
    image: 'https://m.media-amazon.com/images/I/81DtL2l65AL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id: 'lc10',
    title: 'Universal Laptop Charger (65W)',
    description: 'Universal 65W charger with multiple tips for various brands',
    price: '$40',
    image: 'https://m.media-amazon.com/images/I/61LDH8na7fL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  }
];

const dataRecovery = [
  {
    id: 'dr1',
    title: 'Hard Drive Data Recovery',
    description: 'Recover lost files from HDDs due to accidental deletion, formatting, or corruption.',
    price: 'Starting at $99',
    image: 'https://images.pexels.com/photos/1082327/pexels-photo-1082327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'dr2',
    title: 'SSD Data Recovery',
    description: 'Advanced recovery services for NVMe and SATA SSDs, including firmware issues.',
    price: 'Starting at $149',
    image: 'https://m.media-amazon.com/images/I/61nXm8zu+5L._AC_SY300_SX300_.jpg'
  },
  {
    id: 'dr3',
    title: 'USB Flash Drive Recovery',
    description: 'Retrieve lost or deleted files from flash drives and USB sticks.',
    price: 'Starting at $79',
    image: 'https://images.pexels.com/photos/5474284/pexels-photo-5474284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'dr4',
    title: 'RAID & Server Data Recovery',
    description: 'Professional RAID array and server data restoration services for businesses.',
    price: 'Starting at $299',
    image: 'https://images.pexels.com/photos/18471532/pexels-photo-18471532/free-photo-of-a-computer-room-with-a-monitor-and-computer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'dr5',
    title: 'Mac & Windows Data Recovery',
    description: 'Recover lost files from Windows and macOS systems, including accidental OS reinstalls.',
    price: 'Starting at $129',
    image: 'https://media.istockphoto.com/id/518306744/photo/external-hard-disk-and-laptop-computer.jpg?s=1024x1024&w=is&k=20&c=wSae6hYEh76XJp8mLOm79xavEhkdyTN4m73BXR-ddwo='
  },
  {
    id: 'dr6',
    title: 'SD Card & Camera Storage Recovery',
    description: 'Restore lost images and videos from SD cards, microSD, and camera storage.',
    price: 'Starting at $89',
    image: 'https://images.pexels.com/photos/15908073/pexels-photo-15908073/free-photo-of-box-with-equipment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'dr7',
    title: 'Smartphone Data Recovery',
    description: 'Recover lost contacts, messages, and files from iPhones and Android devices.',
    price: 'Starting at $149',
    image: 'https://m.media-amazon.com/images/I/71uIcDCkl4L._AC_SX425_.jpg'
  },
  {
    id: 'dr8',
    title: 'Cloud & Remote Data Recovery',
    description: 'Recover lost files from cloud storage services such as Google Drive, iCloud, and OneDrive.',
    price: 'Starting at $99',
    image: 'https://media.istockphoto.com/id/1481564527/photo/computer-laptop-and-dashboard-for-data-document-management-system-on-cloud-online.jpg?s=1024x1024&w=is&k=20&c=G77e2T0s_tdaFnIiD4J2eXG5-UKvnZEvjftW0MdX7fU='
  },
  {
    id: 'dr9',
    title: 'Encrypted Drive Data Recovery',
    description: 'Advanced decryption and recovery for BitLocker, VeraCrypt, and other encrypted drives.',
    price: 'Starting at $199',
    image: 'https://media.istockphoto.com/id/1392441781/vector/data-protection-and-recovery-abstract-concept-vector-illustrations.jpg?s=1024x1024&w=is&k=20&c=5Ng5JvxxUZWJq88oZb27NG1HkG6aLkI5wktOkDLmwCs='
  },
  {
    id: 'dr10',
    title: 'Ransomware Data Recovery',
    description: 'Restore data affected by ransomware attacks and malware infections.',
    price: 'Starting at $499',
    image: 'https://images.pexels.com/photos/544900/pexels-photo-544900.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const upgrades = [
  {
    id: 'up1',
    title: 'RAM Upgrade',
    description: 'Boost your system performance by upgrading your RAM.',
    price: 'Starting at $50',
    image: 'https://m.media-amazon.com/images/I/8171u3Dj7jL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id: 'up2',
    title: 'SSD Upgrade',
    description: 'Upgrade to an SSD for faster boot times and improved performance.',
    price: 'Starting at $99',
    image: 'https://m.media-amazon.com/images/I/71FHPYQ2JbL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id: 'up3',
    title: 'CPU Upgrade',
    description: 'Enhance your computer’s processing power with a CPU upgrade.',
    price: 'Starting at $200',
    image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'up4',
    title: 'Graphics Card Upgrade',
    description: 'Upgrade your GPU for better gaming and graphic-intensive tasks.',
    price: 'Starting at $250',
    image: 'https://images.pexels.com/photos/7102037/pexels-photo-7102037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'up5',
    title: 'Power Supply Upgrade',
    description: 'Ensure stable performance with a high-quality PSU upgrade.',
    price: 'Starting at $80',
    image: 'https://m.media-amazon.com/images/I/71B-hWbkMsL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id: 'up6',
    title: 'Cooling System Upgrade',
    description: 'Improve system cooling with better fans, liquid cooling, or heatsinks.',
    price: 'Starting at $75',
    image: 'https://m.media-amazon.com/images/I/515HaUnU6wL._SY445_SX342_QL70_FMwebp_.jpg'
  },
  {
    id: 'up7',
    title: 'Motherboard Upgrade',
    description: 'Upgrade your motherboard for better compatibility and features.',
    price: 'Starting at $150',
    image: 'https://images.pexels.com/photos/10558598/pexels-photo-10558598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'up8',
    title: 'Laptop Battery Replacement',
    description: 'Get a new battery to extend your laptop’s life and portability.',
    price: 'Starting at $90',
    image: 'https://m.media-amazon.com/images/I/81OBuX6JChS._AC_SL1500_.jpg'
  },
  {
    id: 'up9',
    title: 'Monitor Upgrade',
    description: 'Upgrade to a high-resolution or ultra-wide monitor for better productivity.',
    price: 'Starting at $200',
    image: 'https://m.media-amazon.com/images/I/71M1aC7TiNL._AC_SL1500_.jpg'
  },
  {
    id: 'up10',
    title: 'Wi-Fi Card Upgrade',
    description: 'Improve your internet speed and connectivity with a new Wi-Fi card.',
    price: 'Starting at $50',
    image: 'https://m.media-amazon.com/images/I/712xJnPpKPL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  }
];

const diagnostics = [
  {
    id: 'diag1',
    title: 'Full System Diagnostic',
    description: 'Comprehensive hardware and software analysis to identify issues.',
    price: 'Starting at $50',
    image: 'https://images.pexels.com/photos/8720269/pexels-photo-8720269.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'diag2',
    title: 'Laptop Performance Check',
    description: 'Identify slow performance causes and optimize your system.',
    price: 'Starting at $40',
    image: 'https://media.istockphoto.com/id/1003122590/photo/female-it-engineer-using-laptopf-for-analysis-of-network-servers-in-server-room.jpg?s=1024x1024&w=is&k=20&c=t2dyM2lOZLeHqL_sxMcJMLUNjbyZKtBNjWB6iMCOKsg='
  },
  {
    id: 'diag3',
    title: 'Battery Health Check',
    description: 'Test your laptop’s battery life and determine if replacement is needed.',
    price: 'Starting at $25',
    image: 'https://m.media-amazon.com/images/I/61dNfUgu8OL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id: 'diag4',
    title: 'Hard Drive Health Check',
    description: 'Assess HDD/SSD health and detect potential failures.',
    price: 'Starting at $30',
    image: 'https://m.media-amazon.com/images/I/715pzxY+l1L._AC_SX300_SY300_.jpg'
  },
  {
    id: 'diag5',
    title: 'Virus & Malware Scan',
    description: 'Detect and remove viruses, malware, and security threats.',
    price: 'Starting at $45',
    image: 'https://images.pexels.com/photos/5380651/pexels-photo-5380651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'diag6',
    title: 'Overheating Diagnostic',
    description: 'Analyze and fix overheating issues for better performance.',
    price: 'Starting at $35',
    image: 'https://media.istockphoto.com/id/2025351799/photo/fixing-laptop-repairman-holds-cooling-fan-and-repairs-from-overheating-disassembling-computer.jpg?s=612x612&w=0&k=20&c=mWB33gP777ttgr-OHu-eUl6CekxFlXAEaLq3a-gvEcs='
  },
  {
    id: 'diag7',
    title: 'Blue Screen Troubleshooting',
    description: 'Identify causes of system crashes and provide solutions.',
    price: 'Starting at $60',
    image: 'https://media.istockphoto.com/id/1464537042/vector/sad-smile-of-a-blue-screen-of-death-concept-in-laptop-computer-screen-flat-vector.jpg?s=1024x1024&w=is&k=20&c=wTQ7FKH7Htuh3m785aKXHawltg8v12naoVkLalT3TpQ='
  },
  {
    id: 'diag8',
    title: 'Wi-Fi & Network Diagnostic',
    description: 'Troubleshoot connectivity and internet speed issues.',
    price: 'Starting at $40',
    image: 'https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'diag9',
    title: 'Software Compatibility Test',
    description: 'Check system compatibility for software installations and updates.',
    price: 'Starting at $30',
    image: 'https://images.pexels.com/photos/8720616/pexels-photo-8720616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'diag10',
    title: 'Peripheral Device Testing',
    description: 'Diagnose issues with printers, USB devices, and external hardware.',
    price: 'Starting at $20',
    image: 'https://images.pexels.com/photos/3861949/pexels-photo-3861949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const networkServices = [
  {
    id: 'net1',
    title: 'LAN Cable Installation',
    description: 'Professional setup of high-speed LAN cables for stable network connections.',
    price: 'Starting at $50',
    image: 'https://images.pexels.com/photos/3541557/pexels-photo-3541557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'net2',
    title: 'Router Setup & Configuration',
    description: 'Installation and configuration of routers for secure and optimized connectivity.',
    price: 'Starting at $40',
    image: 'https://images.pexels.com/photos/29711663/pexels-photo-29711663/free-photo-of-modern-wireless-router-with-antennas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'net3',
    title: 'Wi-Fi Optimization',
    description: 'Improve Wi-Fi performance with proper placement and signal boosting.',
    price: 'Starting at $30',
    image: 'https://images.pexels.com/photos/3862605/pexels-photo-3862605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'net4',
    title: 'Network Security Assessment',
    description: 'Identify and fix security vulnerabilities in your network setup.',
    price: 'Starting at $60',
    image: 'https://images.pexels.com/photos/4339335/pexels-photo-4339335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'net5',
    title: 'Switches & Hub Installation',
    description: 'Setup and configure network switches and hubs for seamless connections.',
    price: 'Starting at $70',
    image: 'https://images.pexels.com/photos/5767595/pexels-photo-5767595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'net6',
    title: 'VPN Configuration',
    description: 'Secure your internet connection with a properly configured VPN.',
    price: 'Starting at $45',
    image: 'https://images.pexels.com/photos/5243610/pexels-photo-5243610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'net7',
    title: 'Network Troubleshooting',
    description: 'Fix connectivity issues and optimize network speed.',
    price: 'Starting at $35',
    image: 'https://images.pexels.com/photos/28114001/pexels-photo-28114001/free-photo-of-a-close-up-of-wires-and-wires-in-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'net8',
    title: 'Office & Home Network Setup',
    description: 'Complete network installation for home and office environments.',
    price: 'Starting at $100',
    image: 'https://media.istockphoto.com/id/1262605612/vector/sustainable-renewable-energy-battery-storage-off-power-grid-house-island-system.jpg?s=2048x2048&w=is&k=20&c=xU43GIyjk8BrvWpKJWRfvK7vsRd35zjQJqKb2fEzf3o='
  },
  {
    id: 'net9',
    title: 'Firewall Configuration',
    description: 'Secure your network with a properly configured firewall.',
    price: 'Starting at $55',
    image: 'https://m.media-amazon.com/images/I/5144UkEDhcL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id: 'net10',
    title: 'Cloud Networking Solutions',
    description: 'Setup and manage cloud-based networking for businesses.',
    price: 'Starting at $120',
    image: 'https://media.istockphoto.com/id/1695598546/photo/businessman-using-tablet-to-transfer-data-on-cloud-computing-seamless-data-transfer-and.jpg?s=2048x2048&w=is&k=20&c=Dlse7dYErHmqv_TTR1IIxVbyL5htJhYk25hwMFKBTaI='
  }
];

function ServiceDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const getServiceItems = (serviceId) => {
    switch (serviceId) {
      case '1': return newLaptops;
      case '2': return refurbishedLaptops;
      case '3': return laptopRepairs;
      case '4': return laptopParts;
      case '5': return tradeIn;
      case '6': return laptopChargers;
      case '7': return dataRecovery;
      case '8': return upgrades;
      case '9': return diagnostics;
      case '10': return networkServices;
      default: return [];
    }
  };

  const serviceItems = getServiceItems(id);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">available products</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {serviceItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">${item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;