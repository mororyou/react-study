'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

export default function Header() {
  const pathname = usePathname();

  const segments = pathname.split('/').filter((item) => item !== '');
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    ...segments.map((item, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      return {
        label: item,
        href,
      };
    }),
  ];

  return (
    <header className="w-full p-4 bg-white flex items-center justify-between shadow-xs">
      <div className="flex justify-start items-center gap-2">
        <SidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => (
              <Fragment key={item.href}>
                <BreadcrumbItem key={item.href}>
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                </BreadcrumbItem>
                {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
