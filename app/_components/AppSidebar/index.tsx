import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { sidebar_19_2 } from '@/constants/sidebar';
import Link from 'next/link';

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>React v19.2</SidebarGroupLabel>
          <SidebarGroupContent>
            {sidebar_19_2.map((item) => (
              <Link href={item.href} key={item.href}>
                <SidebarMenuItem>
                  <SidebarMenuButton>{item.label}</SidebarMenuButton>
                </SidebarMenuItem>
              </Link>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
