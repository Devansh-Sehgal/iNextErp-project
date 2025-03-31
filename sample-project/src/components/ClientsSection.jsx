
import React from 'react';
import ClientCard from './ClientCard';

const ClientsSection = () => {
  const clients = [
    {
      name: "Mamta Saree",
      logo: "/Clients/MamtaSaree.jpg",
      description: "Leading fashion retailer specializing in traditional sarees and ethnic wear.",
      industry: "Fashion Retail"
    },
    {
      name: "Paridhan",
      logo: "/Clients/Paridhan.jpg",
      description: "Premium fashion brand offering a wide range of contemporary clothing options.",
      industry: "Fashion Retail"
    },
    {
      name: "Sheesh Mahal Saree Wala",
      logo: "/Clients/SheeshMahalSareeWala.png",
      description: "Renowned saree retailer known for exquisite designs and premium quality fabrics.",
      industry: "Fashion Retail"
    },
    {
      name: "Tanjor",
      logo: "/Clients/Tanjor.png",
      description: "Specialty retailer focusing on traditional South Indian ethnic wear and accessories.",
      industry: "Fashion Retail"
    },
    {
      name: "UTSAV",
      logo: "/Clients/UTSAV.png",
      description: "Celebration wear retailer offering festive clothing and accessories for all occasions.",
      industry: "Fashion Retail"
    },
    {
      name: "Neha Saree",
      logo: "/Clients/nehasareemzf.jpg",
      description: "Boutique saree shop with a curated collection of designer and handcrafted sarees.",
      industry: "Fashion Retail"
    }
  ];

  return (
    <section id="clients" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h2>
          <p className="text-lg text-muted-foreground">
            Trusted by leading retailers and brands nationwide to transform their inventory operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <ClientCard
                logo={client.logo}
                name={client.name}
                description={client.description}
                industry={client.industry}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
