"use client";
import React, { useEffect, useRef, useState } from "react";

import Picture from "../picture/Picture";
import { useCategories, WooCommerce } from "../lib/woocommerce";
import ProductCard from "../Cards/ProductCard";
import HomeCard from "../Cards/HomeCard";
import Carousel from "../Reusables/Carousel";
import Link from "next/link";
import { convertToSlug, convertToSlug2 } from "@constants";
import { useEncryptionHelper } from "../EncryptedData";
import { useDispatch } from "react-redux";
import { updateCategorySlugId } from "../config/features/subCategoryId";
import { useRouter } from "next/navigation";
import HeroCarousel from "../Cards/HeroCarousel";
import Image from "next/image";
import {
  speedImage,
  securityImage,
  supportImage,
  heroBg,
} from "@public/images";

const AllCategorySection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [maxScrollTotal, setMaxScrollTotal] = useState(0);
  const [scrollLeftTotal, setScrollLeftTotal] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const router = useRouter();

  // State to hold products by category
  const [categoryProductsMap, setCategoryProductsMap] = useState<{
    [key: string]: ProductType[];
  }>({});
  // WooCommerce API Category
  const {
    data: categories,
    isLoading: categoryWpIsLoading,
    isError: categoryIsError,
  } = useCategories("");

  const Categories: CategoryType[] = categories;
  const TotalCatgory = Categories?.length - 1;

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setIsLoading(true);

        const filteredCategories = categories
          ?.filter((category: CategoryType) => category?.count > 0)
          ?.slice(0, 5);

        if (filteredCategories) {
          const productsPromises = filteredCategories.map(
            async (category: CategoryType) => {
              const response = await WooCommerce.get(
                `products?category=${category?.id}`,
              );

              // Check if there is at least one product in the category
              const firstProductImage =
                response?.data.length > 0
                  ? response?.data[0]?.images[0]?.src
                  : null;

              return {
                categoryId: category?.id,
                firstProductImage: firstProductImage, // Store the first product's image
              };
            },
          );

          const productsResults = await Promise.all(productsPromises);

          // Update the state with the first product images mapped by category
          const productsMap = productsResults.reduce(
            (acc: any, result: any) => ({
              ...acc,
              [result.categoryId]: result.firstProductImage,
            }),
            {},
          );

          setCategoryProductsMap(productsMap);
        }
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (categories?.length) {
      fetchCategoryProducts();
    }
  }, [categories]);

  const handleNext = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      setScrollLeftTotal(scrollLeft);
      setMaxScrollTotal(maxScroll);

      sliderRef.current.scrollLeft += 600; // Adjust the scroll distance as needed
      setCurrentIndex((prevIndex) =>
        prevIndex < TotalCatgory - 1 ? prevIndex + 1 : prevIndex,
      );
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      setScrollLeftTotal(scrollLeft);
      setMaxScrollTotal(maxScroll);
      // console.log(scrollLeft);
      if (scrollLeft > 0) {
        sliderRef.current.scrollLeft -= 600; // Adjust the scroll distance as needed
        setCurrentIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex,
        );
      }
    }
  };

  return (
    <>
      <section className="relative min-h-[70dvh] sm:min-h-screen overflow-hidden flex items-center justify-center">
        {/* ─── Layer 1 · Background image ──────────────────────────────────────
          Absolutely positioned so it fills the entire section behind all
          other layers. `object-cover` ensures the image scales to cover the
          container without distortion at any viewport width.
      ──────────────────────────────────────────────────────────────────────── */}
        <div className="absolute inset-0 z-0">
          <Picture
            src={heroBg}
            alt="Laptop keyboard — top-notch accessories backdrop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ─── Layer 2 · Gradient overlay ──────────────────────────────────────
          A dark-to-transparent-to-dark gradient that:
            • Dims the top-right purple area while preserving its warm glow.
            • Adds enough darkness across the centre for text contrast.
            • Keeps the bottom edge deeply dark so the CTA button reads cleanly.
          `z-10` stacks this above the image but below the content.
      ──────────────────────────────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.5) 100%)",
          }}
          aria-hidden="true"
        />

        {/* ─── Layer 3 · Foreground content ────────────────────────────────────
          `z-20`         — sits above the overlay.
          `text-center`  — centres all inline/text content.
          `px-6`         — horizontal breathing room on narrow viewports.
          `max-w-2xl`    — constrains the copy width for comfortable line-lengths.
      ──────────────────────────────────────────────────────────────────────── */}
        <div className="relative z-20 flex flex-col md:right-[25%] mt-20 md:mt-0  text-justify px-6 max-w-2xl mx-auto space-y-6">
          {/* ── Headline ───────────────────────────────────────────────────────
            Large, high-contrast serif-influenced display heading.
            `tracking-tight` tightens letter-spacing for display sizes.
            `leading-tight`  ensures comfortable multi-line reading.
        ──────────────────────────────────────────────────────────────────── */}
          <p className="text-sm text-[#F2CA50] text-[11px]">MASTERY OF SOUND</p>
          <h1 className="text-4xl font-playfair font-bold sm:text-5xl lg:text-7xl text-white leading-tight tracking-tight">
            Pure Audio.
            <br className="" />
            <span className="text-[#F2CA50]  italic">Uncompromised.</span>
          </h1>

          {/* ── Sub-copy ───────────────────────────────────────────────────────
            Lighter weight, softer white so it recedes behind the headline
            without disappearing. `max-w-md` keeps line-lengths readable.
        ──────────────────────────────────────────────────────────────────── */}
          <p className="text-gray-300 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-md">
            Experience sound as it was meant to be heard. Meticulously
            engineered for those who demand acoustic perfection and
            architectural elegance.
          </p>

          {/* ── Call-to-action ─────────────────────────────────────────────────
            White fill + dark text — matches the reference design exactly.
            `hover:bg-gray-100`         — subtle hover brightening.
            `transition-all duration-200` — smooth scale + colour transition.
            `hover:scale-105`           — gentle lift on hover for interactivity.
        ──────────────────────────────────────────────────────────────────── */}
          <div className="flex flex-col md:flex-row gap-5 max-w-5xl">
            <div className="pt-2">
              <Link
                href="/category"
                className="
              inline-block
              bg-[#F2CA50] hover:bg-[#F2CA50]/90
              text-black
              text-[18px]
              font-normal
              font-serif
              px-10 py-3
              rounded-lg
              transition-all duration-200
              hover:scale-105
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
            "
              >
                EXPLORE SERIES ONE
              </Link>
            </div>
            <div className="pt-2">
              <Link
                href="/category"
                className="
              inline-block
              bg-transparent 
              border
              border-[#fff]/80
              text-white
              text-[18px]
              font-normal
              font-serif
              px-10 py-3
              rounded-lg
              transition-all duration-200
              hover:scale-105
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
              "
              >
                VIEW CATALOG
              </Link>
            </div>
          </div>
        </div>
        {/* /foreground content */}
      </section>

      {/* Category Section Styling Idea */}
      {/* <h5 className="max-w-[1350px] mx-auto mt-[50px] pl-2 md:pl-0 text-#181818 font-bold text-[30px] lg:text-[48px]">
        Popular Products
      </h5>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mx-auto max-w-[1350px] px-2 lg:px-0  mt-6 gap-10">
        {Categories?.slice(0, 5).map((cat) => {
          const productImage = categoryProductsMap[cat?.id];
          return (
            <Link
              key={cat.id}
              href={`/category/${convertToSlug(cat.name)}-${cat.id}`}
              className="group relative h-40 sm:h-48 bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all"
            >
              <Picture
                src={cat.image?.src ?? productImage}
                alt={cat.image?.name}
                className="w-full h-full object-contain opacity-60 group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute bottom-4 left-4">
                <h3 className="text-sm sm:text-lg font-bold text-white uppercase">
                  {cat.name}
                </h3>
              </div>
            </Link>
          );
        })}
      </div> */}
      {/* </Carousel> */}
    </>
  );
};

export default AllCategorySection;
