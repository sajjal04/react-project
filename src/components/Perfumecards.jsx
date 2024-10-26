import React from 'react';
const Perfumecards = () => {
    const newlyLaunched = [
        { id: 1, name: "Royal Crown", price: "Rs.1,499", imageUrl: "/images/perfume1.jpg" },
        { id: 2, name: "Love Drops", price: "Rs.1,799", imageUrl: "/images/perfume2.jpg" },
        { id: 3, name: "Destiny", price: "Rs.1,999", imageUrl: "/images/perfume3.png" },
        { id: 4, name: "X Chocolate", price: "Rs.1,399", imageUrl: "/images/perfume4.png" },
        { id: 5, name: "Love Me", price: "Rs.1,699", imageUrl: "/images/perfume5.jpg" },
        { id: 6, name: "Candy Girl", price: "Rs.1,799", imageUrl: "/images/perfume6.jpg" },
        { id: 7, name: "Silky Touch", price: "Rs.1,999", imageUrl: "/images/perfume7.jpg" },
        { id: 8, name: "Ziarat", price: "Rs.1,699", imageUrl: "https://arfragrances.pk/cdn/shop/files/Ziarat_51e2f12f-def4-45cc-b769-1a974c6f1b81.jpg?v=1704803678&width=533" },
        { id: 9, name: "Golden Era", price: "Rs.1,499", imageUrl: "https://arfragrances.pk/cdn/shop/files/Goldenera_a0919d60-51e4-4a0e-ae77-1aca303ebc5b.jpg?v=1707909409&width=533" },
        { id: 10, name: "Twisted Divine", price: "Rs.1,599", imageUrl: "https://arfragrances.pk/cdn/shop/files/twisted-divineWeb.jpg?v=1721929948&width=360" },
        { id: 11, name: "Elegance", price: "Rs.1,999", imageUrl: "https://arfragrances.pk/cdn/shop/files/Elegance-Web_319ce16d-ab34-4bb2-a131-21cd073a698d.jpg?v=1721938484&width=360" },
        { id: 12, name: "Be Wild", price: "Rs.1,299", imageUrl: "https://arfragrances.pk/cdn/shop/files/bewild.jpg?v=1707904817&width=360" },
        { id: 13, name: "Swaggy", price: "Rs.1,499", imageUrl: "https://arfragrances.pk/cdn/shop/files/swaggy.jpg?v=1709307863&width=360" },
        { id: 14, name: "Sixer Elite", price: "Rs.1,399", imageUrl: "https://arfragrances.pk/cdn/shop/files/Sixer-elite-Web.jpg?v=1721850237&width=360" },
    ];

    const fragrancesToLove = [
        { id: 15, name: "X Chocolate", price: "Rs.1,199", imageUrl: "https://arfragrances.pk/cdn/shop/files/X-Chocolate.jpg?v=1704803656&width=360" },
        { id: 16, name: "Couple Deal", price: "Rs.1,999", imageUrl: "https://arfragrances.pk/cdn/shop/files/WhatsAppImage2024-02-07at16.28.37.jpg?v=1707308408&width=360" },
        { id: 17, name: "Divine", price: "Rs.1,499", imageUrl: "https://arfragrances.pk/cdn/shop/files/WhatsAppImage2024-03-01at20.30.17.jpg?v=1709308787&width=360" },
        { id: 18, name: "Glam Girl", price: "Rs.1,150", imageUrl: "https://arfragrances.pk/cdn/shop/files/Glame-Girl_24c29596-2834-417b-8f8b-037d1d4d17ab.jpg?v=1704803295&width=360" },
        { id: 19, name: "Mr Blue", price: "Rs.1,199", imageUrl: "https://arfragrances.pk/cdn/shop/files/MR-Blue_d9df8b5c-34a7-479c-b196-c3cbe02558ca.jpg?v=1704879572&width=360" },
        { id: 21, name: "Ocean Shades", price: "Rs.1,199", imageUrl: "https://arfragrances.pk/cdn/shop/files/Ocean-Shade_48d37531-8c3e-484b-a210-d0927ada65f9.jpg?v=1704803402&width=360" },
        { id: 22, name: "Silky Touch", price: "Rs.1,199", imageUrl: "https://arfragrances.pk/cdn/shop/files/Silky-Touch.jpg?v=1704803511&width=360" },
        { id: 23, name: "UNPLANNED Plans", price: "Rs.1,199", imageUrl: "https://arfragrances.pk/cdn/shop/files/Unplanned-Plans.jpg?v=1704803635&width=360" },
        { id: 24, name: "Ziarat", price: "Rs.1,199", imageUrl: "https://arfragrances.pk/cdn/shop/files/Ziarat_51e2f12f-def4-45cc-b769-1a974c6f1b81.jpg?v=1704803678&width=360" },
        { id: 25, name: "Sixer Elite", price: "Rs.1,199", imageUrl: "https://arfragrances.pk/cdn/shop/files/sixer-elite-Web_a046af41-0196-468c-9aa3-755263c268f5.jpg?v=1721850277&width=360" },
        { id: 26, name: "Twisted Divine", price: "Rs.1,199", imageUrl: "https://arfragrances.pk/cdn/shop/files/Twisted-Divine-100ml.jpg?v=1721929991&width=360" },
        { id: 27, name: "Romantic Chocolate", price: "Rs.1,199", imageUrl: "https://arfragrances.pk/cdn/shop/files/Romantic-Choclate-100-ML.jpg?v=1721936145&width=360" },
        { id: 28, name: "Sixer Gold", price: "Rs.1,199", imageUrl: "https://arfragrances.pk/cdn/shop/files/sixer-gold-Web.jpg?v=1721851906&width=360" },
        { id: 29, name: "The Boss", price: "Rs.1,199", imageUrl: "https://arfragrances.pk/cdn/shop/files/The-Boss.jpg?v=1724401781&width=360" },
        { id: 30, name: "MR KING", price: "Rs.1,199", imageUrl: "https://arfragrances.pk/cdn/shop/files/Mr-King.jpg?v=1724408454&width=360" },
    ];
    const bestProducts = [
      { id: 1, name: "Romantic Chocolate (Unisex)", price: "From Rs.1,399.00", imageUrl: "https://arfragrances.pk/cdn/shop/files/Romantic-Choclate-100-ML.jpg?v=1721936145&width=360" },
      { id: 2, name: "Sixer Gold (Men)", price: "From Rs.1,699.00", imageUrl: "https://arfragrances.pk/cdn/shop/files/sixer-gold-Web.jpg?v=1721851906&width=360" },
      { id: 3, name: "Sixer - Inspired by Avanus (Men)", price: "From Rs.1,499.00", imageUrl: "https://arfragrances.pk/cdn/shop/files/Sixer-elite-Web.jpg?v=1721850237&width=360" },
      { id: 4, name: "The Boss", price: "From Rs.1,199.00", imageUrl: "https://arfragrances.pk/cdn/shop/files/The-Boss.jpg?v=1724401781&width=360" },
      { id: 5, name: "Mr King", price: "From Rs.1,199.00", imageUrl: "https://arfragrances.pk/cdn/shop/files/Mr-King.jpg?v=1724408454&width=360" },
      { id: 6, name: "X Chocolate", price: "From Rs.1,199.00", imageUrl: "https://arfragrances.pk/cdn/shop/files/X-Chocolate.jpg?v=1704803656&width=360" },
      { id: 7, name: "Couple Deal", price: "From Rs.1,999.00", imageUrl: "https://arfragrances.pk/cdn/shop/files/WhatsAppImage2024-02-07at16.28.37.jpg?v=1707308408&width=360" },
      { id: 8, name: "Golden Era", price: "From Rs.1,499.00", imageUrl: "https://arfragrances.pk/cdn/shop/files/Goldenera_a0919d60-51e4-4a0e-ae77-1aca303ebc5b.jpg?v=1707909409&width=533" },
      { id: 9, name: "Twisted Divine", price: "From Rs.1,599.00", imageUrl: "https://arfragrances.pk/cdn/shop/files/twisted-divineWeb.jpg?v=1721929948&width=360" }
  ];
  const perfumeInfo = [
    {
        id: 1,
        title: "What Are the Summer Best Fragrances For Men",
        description: "Summertime is all about lengthy nights and burning days. In the end, you want to smell good all the time. The best summer Fragrances for men on our list are...",
        imageUrl: "https://arfragrances.pk/cdn/shop/articles/Best_Perfume_for_Men_520x500_b8c2247c-502d-4218-b73e-0af38730bca5.webp?v=1725989152"
    },
    {
        id: 2,
        title: "Genuine Brands at Discounted Best Perfume Prices",
        description: "Selecting a fragrance can be a daunting task due to the vast array of options available. Women often have a collection of their preferred scents, making Best Perfume Price in...",
        imageUrl: "https://arfragrances.pk/cdn/shop/collections/Women-Compressed.jpg?v=1672663362&width=750"
    },
    {
        id: 3,
        title: "Best Long-Lasting Perfume For Men And Women",
        description: "In the era of fragrances, finding the perfect scent that not only reflects your personality but also lasts throughout the day is paramount. Pakistan, with its diverse market, offers a...",
        imageUrl: "https://arfragrances.pk/cdn/shop/articles/fragrances_520x500_59618077-9239-49a8-973d-628e4a106f20.webp?v=1726156397"
    },
    {
        id: 4,
        title: "Buy Top Perfumes in Pakistan at Affordable Prices",
        description: "Find a list of the best perfumes in Pakistan for teens, men, and women! From the best-branded perfumes in Pakistan to top Pakistani perfumes in Pakistan! Welcome to the wonderful...",
        imageUrl: "https://arfragrances.pk/cdn/shop/articles/Fragrance_Best_Perfume_520x500_59b7ffad-7432-4edc-b2bb-5524bd0c6b3b.webp?v=1726066031"
    }
];

    return (
        <div className='newlaunch'>
            <div className="container mt-4">
                <h1 className='text-center'>Newly Launched</h1>
                <br />
                <div className="row">
                    {newlyLaunched.map((product) => (
                        <div key={product.id} className="col-6 col-md-4 col-lg-3 mb-4">
                            <div className="card h-100">
                                <div className="image-container">
                                    <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container mt-4">
                <h1 className='text-center'>Fragrances to Fall in Love With</h1>
                <br />
                <div className="row">
                    {fragrancesToLove.map((product) => (
                        <div key={product.id} className="col-6 col-md-4 col-lg-3 mb-4">
                            <div className="card h-100">
                                <div className="image-container">
                                    <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.price}</p>
                                    <button className="btn btn-dark rounded-0">Choose options</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container mt-4">
            <h1 className='text-center'>Best Products</h1>
            <br />
            <div className="row">
                {bestProducts.map((product) => (
                    <div key={product.id} className="col-md-4 col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="image-container">
                                <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price}</p>
                                <button className="btn btn-dark rounded-0">Choose options</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="container mt-4">
            <h1 className='text-center'>All About Perfumes</h1>
            <br />
            <div className="row">
                {perfumeInfo.map((info) => (
                    <div key={info.id} className="col-md-6 col-lg-3 mb-4 ">
                        <div className="card h-100 no-border rounded-0">
                            <img src={info.imageUrl} className="card-img-top" alt={info.title} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{info.title}</h5>
                                <p className="card-text">{info.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Perfumecards;
