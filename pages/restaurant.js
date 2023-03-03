import Layout from "@/components/Layout";
import MenuHeader from "@/components/MenuHeader";
import { MenuItem } from "@/components/MenuItem";
import Image from "next/image";

export default function Restaurant() {
  return (
    <>
      <main>
        <Layout>
          <MenuHeader />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </Layout>
      </main>
    </>
  );
}
