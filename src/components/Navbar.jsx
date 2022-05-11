import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Link,
} from '@chakra-ui/react';
const godown = () => {
  window.scrollTo({ top: 5000, behavior: 'smooth' });
};

export const Navbar = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Inicio</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href='#technologies'>Tecnologías</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href='#proyectos'>Proyectos</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
