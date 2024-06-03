CREATE TABLE `usuarios` (
  `id` integer PRIMARY KEY,
  `email` varchar(255) NOT NULL,
  `nombre_usuario` varchar(255) NOT NULL,
  `contrasenia` varchar(255) NOT NULL,
  `fecha_creacion` timestamp,
  `borrado` bit
);

CREATE TABLE `planes_ejercicios` (
  `id` integer PRIMARY KEY,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `plan` text NOT NULL,
  `creado_por_id` integer,
  `editado_por_id` integer
);

CREATE TABLE `sesiones` (
  `usuario_id` integer,
  `session_expires_at` timestamp
);

ALTER TABLE `planes_ejercicios` ADD FOREIGN KEY (`creado_por_id`) REFERENCES `usuarios` (`id`);

ALTER TABLE `planes_ejercicios` ADD FOREIGN KEY (`editado_por_id`) REFERENCES `usuarios` (`id`);

ALTER TABLE `sesiones` ADD FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
