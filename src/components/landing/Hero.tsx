import { heroConfig, socialLinks, socialIconComponents } from '@/config/Hero';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function Hero() {
  const { name, subtitle, avatar } = heroConfig;

  return (
    <Container className="mx-auto max-w-6xl">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Image - Left Side */}
          <div className="flex-shrink-0">
            <div className="relative w-33 h-33 md:w-44 md:h-44">
              <Image
                src={avatar}
                alt={name}
                fill
                className="rounded-full object-cover bg-gray-200 dark:bg-gray-700"
              />
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Heading */}
            <div className="flex flex-col gap-2">
              <h1 className="text-[20px] md:text-[37px] font-bold text-gray-900 dark:text-gray-100">
                Hello, I&apos;m {name}
              </h1>
              {subtitle && (
                <p className="text-[14px] md:text-[17px] text-gray-600 dark:text-gray-400 font-normal">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Social Links - Bottom */}
        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const IconComponent =
              socialIconComponents[
                link.icon as keyof typeof socialIconComponents
              ];
            return (
              <Tooltip key={link.name} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      {IconComponent && <IconComponent className="w-6 h-6" />}
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.name}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
