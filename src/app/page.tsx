"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="mediumLargeSizeLargeTitles"
      background="circleGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Alipress"
          navItems={[
            { name: "Shop", id: "products" },
            { name: "Categories", id: "categories" },
            { name: "Deals", id: "deals" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Welcome to Alipress Online Store"
          description="Your trusted online marketplace for quality products at amazing prices. From electronics and fashion to home essentials and beauty products, we bring everything you need into one convenient store. Shop smarter. Save more. Enjoy fast and easy ordering."
          tag="Everything You Need, Delivered With Ease"
          background={{ variant: "canvas-reveal" }}
          imageSrc="http://img.b2bpic.net/free-photo/online-shopping-cart-e-commers-concept_53876-127436.jpg"
          imageAlt="Alipress Online Store hero banner"
          buttons={[
            { text: "Shop Now", href: "#products" },
            { text: "View Hot Deals", href: "#deals" }
          ]}
          tagAnimation="slide-up"
          buttonAnimation="slide-up"
        />
      </div>

      <div id="categories" data-section="categories">
        <FeatureCardMedia
          title="Featured Categories"
          description="Explore our wide selection of products across multiple categories designed for every need and lifestyle."
          features={[
            {
              id: "electronics",              title: "Electronics",              description: "Smartphones, accessories, headphones, smart watches, chargers and gadgets.",              tag: "Tech",              imageSrc: "http://img.b2bpic.net/free-photo/laptop-headset-phone-table_146671-13973.jpg",              imageAlt: "electronics smartphones gadgets tech"
            },
            {
              id: "fashion",              title: "Fashion",              description: "Men's clothing, women's clothing, shoes, bags, watches and jewelry.",              tag: "Style",              imageSrc: "http://img.b2bpic.net/free-photo/belt-wooden-elegance-clothes-mens_1203-6422.jpg",              imageAlt: "fashion clothing shoes apparel"
            },
            {
              id: "home",              title: "Home & Kitchen",              description: "Cooking tools, kitchen appliances, home decorations, cleaning tools and furniture.",              tag: "Living",              imageSrc: "http://img.b2bpic.net/free-photo/interior-design-house-modern-white-kitchen_657883-328.jpg",              imageAlt: "home decor kitchen furniture interior"
            },
            {
              id: "beauty",              title: "Beauty & Health",              description: "Skincare, hair products, perfumes, cosmetics and personal care items.",              tag: "Care",              imageSrc: "http://img.b2bpic.net/free-photo/natural-skincare-cosmetic-product-orange-background_23-2147817986.jpg",              imageAlt: "beauty skincare cosmetics personal care"
            },
            {
              id: "kids",              title: "Kids & Toys",              description: "Educational toys, baby accessories, games and fun products for children.",              tag: "Fun",              imageSrc: "http://img.b2bpic.net/free-photo/plastic-eccano-set_1398-2179.jpg",              imageAlt: "toys kids children games"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="deals" data-section="deals">
        <ProductCardFour
          title="Hot Deals"
          description="Limited time offers you don't want to miss. Shop these bestsellers at unbeatable prices."
          tag="Limited Offers"
          products={[
            {
              id: "earbuds",              name: "Wireless Earbuds Pro",              price: "$45.99",              variant: "White, Black, Gold",              imageSrc: "http://img.b2bpic.net/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072189.jpg",              imageAlt: "Wireless Earbuds Pro",              isFavorited: false
            },
            {
              id: "smartwatch",              name: "Smart Watch Elite",              price: "$89.99",              variant: "Multiple Sizes",              imageSrc: "http://img.b2bpic.net/free-photo/sporty-active-woman-casual-t-shirt-looks-smartwatch-focused-screen-smiles-gladfully-satisfied-after-wokout-listens-music-wireless-headphones-poses-outdoors-against-urban-surroundings_273609-57760.jpg",              imageAlt: "Smart Watch Elite",              isFavorited: false
            },
            {
              id: "sneakers",              name: "Fashion Sneakers",              price: "$59.99",              variant: "Sizes 6-13",              imageSrc: "http://img.b2bpic.net/free-photo/canvas-sneakers-green-model-tying-shoelaces-apparel-ad_53876-101198.jpg",              imageAlt: "Fashion Sneakers",              isFavorited: false
            },
            {
              id: "ring-light",              name: "LED Ring Light",              price: "$34.99",              variant: "With Stand",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-relaxing-home_23-2150652861.jpg",              imageAlt: "LED Ring Light",              isFavorited: false
            },
            {
              id: "blender",              name: "Portable Blender",              price: "$29.99",              variant: "Cordless",              imageSrc: "http://img.b2bpic.net/free-photo/electronic-device-table_417767-143.jpg",              imageAlt: "Portable Blender",              isFavorited: false
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[
            { text: "View More Deals", href: "#products" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="benefits" data-section="benefits">
        <FeatureCardMedia
          title="Why Shop With Alipress"
          description="We're committed to providing you with the best shopping experience possible with quality products, fast service, and excellent support."
          features={[
            {
              id: "price",              title: "Affordable Prices",              description: "We provide high-quality products at competitive prices.",              tag: "Value",              imageSrc: "http://img.b2bpic.net/free-photo/online-shopping-cart-e-commers-concept_53876-127436.jpg",              imageAlt: "online store marketplace ecommerce shopping"
            },
            {
              id: "speed",              title: "Fast Ordering",              description: "Quick and simple ordering process through our platform or WhatsApp.",              tag: "Convenience",              imageSrc: "http://img.b2bpic.net/free-photo/laptop-headset-phone-table_146671-13973.jpg",              imageAlt: "electronics smartphones gadgets tech"
            },
            {
              id: "selection",              title: "Wide Product Selection",              description: "Thousands of products in different categories to meet every need.",              tag: "Variety",              imageSrc: "http://img.b2bpic.net/free-photo/belt-wooden-elegance-clothes-mens_1203-6422.jpg",              imageAlt: "fashion clothing shoes apparel"
            },
            {
              id: "support",              title: "Customer Support",              description: "Friendly support team ready to assist you anytime via WhatsApp and email.",              tag: "Reliability",              imageSrc: "http://img.b2bpic.net/free-photo/interior-design-house-modern-white-kitchen_657883-328.jpg",              imageAlt: "home decor kitchen furniture interior"
            },
            {
              id: "security",              title: "Secure Shopping",              description: "Your orders and personal information are safe and protected with us.",              tag: "Trust",              imageSrc: "http://img.b2bpic.net/free-photo/natural-skincare-cosmetic-product-orange-background_23-2147817986.jpg",              imageAlt: "beauty skincare cosmetics personal care"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="split"
          useInvertedBackground={false}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="New Arrivals"
          description="Discover the newest products added to our store, featuring the latest trends and innovations."
          tag="Latest Additions"
          products={[
            {
              id: "led-lamp",              name: "Smart LED Lamp",              price: "$32.99",              variant: "Adjustable Brightness",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-relaxing-home_23-2150652861.jpg",              imageAlt: "Smart LED Lamp",              isFavorited: false
            },
            {
              id: "handbag",              name: "Luxury Handbag",              price: "$79.99",              variant: "Premium Leather",              imageSrc: "http://img.b2bpic.net/free-photo/belt-wooden-elegance-clothes-mens_1203-6422.jpg",              imageAlt: "Luxury Handbag",              isFavorited: false
            },
            {
              id: "bluetooth-speaker",              name: "Portable Bluetooth Speaker",              price: "$42.99",              variant: "Waterproof",              imageSrc: "http://img.b2bpic.net/free-photo/electronic-device-table_417767-143.jpg",              imageAlt: "Portable Bluetooth Speaker",              isFavorited: false
            },
            {
              id: "fitness-watch",              name: "Fitness Smart Watch",              price: "$64.99",              variant: "Multiple Colors",              imageSrc: "http://img.b2bpic.net/free-photo/sporty-active-woman-casual-t-shirt-looks-smartwatch-focused-screen-smiles-gladfully-satisfied-after-wokout-listens-music-wireless-headphones-poses-outdoors-against-urban-surroundings_273609-57760.jpg",              imageAlt: "Fitness Smart Watch",              isFavorited: false
            },
            {
              id: "phone-charger",              name: "Wireless Phone Charger",              price: "$24.99",              variant: "Fast Charging",              imageSrc: "http://img.b2bpic.net/free-photo/laptop-headset-phone-table_146671-13973.jpg",              imageAlt: "Wireless Phone Charger",              isFavorited: false
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Explore New Products", href: "#products" }
          ]}
          buttonAnimation="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Great products and fast service. The quality is exceptional and delivery was even faster than expected. Highly recommended for anyone looking for a reliable online store."
          rating={5}
          author="Sarah Johnson, Customer"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg", alt: "portrait woman professional customer" },
            { src: "http://img.b2bpic.net/free-photo/smiling-young-businessman-suit-looking-camera-meeting_1163-4654.jpg", alt: "portrait man professional customer" },
            { src: "http://img.b2bpic.net/free-photo/woman-with-big-smile-her-face-after-big-shopping_329181-18748.jpg", alt: "portrait woman smile customer" },
            { src: "http://img.b2bpic.net/free-photo/closeup-shot-handsome-male-smiling_181624-41237.jpg", alt: "portrait man smile customer" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="blur-reveal"
          useInvertedBackground={true}
        />
      </div>

      <div id="cta" data-section="cta">
        <ContactText
          text="Ready to start shopping at Alipress? Browse our collection and find amazing deals today. Contact us on WhatsApp for exclusive offers and personalized assistance."
          background={{ variant: "plain" }}
          animationType="entrance-slide"
          buttons={[
            { text: "Shop Now", href: "#products" },
            { text: "Contact via WhatsApp", href: "https://wa.me/233XXXXXXXXX?text=Hello%20I%20want%20to%20order%20from%20Alipress%20Online%20Store" }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Quick Links",              items: [
                { label: "Home", href: "/" },
                { label: "Shop", href: "#products" },
                { label: "Categories", href: "#categories" },
                { label: "Deals", href: "#deals" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Customer Service",              items: [
                { label: "Shipping Information", href: "#" },
                { label: "Return Policy", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Help Center", href: "#" }
              ]
            },
            {
              title: "Connect With Us",              items: [
                { label: "WhatsApp", href: "https://wa.me/233XXXXXXXXX" },
                { label: "Email", href: "mailto:support@alipressstore.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "TikTok", href: "https://tiktok.com" }
              ]
            }
          ]}
          copyrightText="© 2025 Alipress Online Store. All Rights Reserved."
        />
      </div>
    </ThemeProvider>
  );
}
