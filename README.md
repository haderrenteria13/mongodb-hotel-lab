# Proyecto de Base de Datos NoSQL

Este proyecto contiene scripts y datos para practicar el uso de MongoDB.

1. Se debe mostrar cuántas reservas activas tiene cada cliente. Se consideran reservas activas aquellas en estado confirmada o pendiente.

2. Crear una consulta en MongoDB para obtener todos los clientes que han
   cancelado al menos una reserva.

3. Se requiere realizar una consulta que totalice y muestre el precio de la noche
   de todas las habitaciones ocupadas.

4. Mostrar el ID del cliente, su correo y la fecha en la que debían ingresar
   para aquellos que cancelaron la reserva después del 15 de octubre de 2025:

## Archivos

- `data/seed-data.json`: Datos iniciales para poblar la base de datos.
- `scripts/database-setup.mongodb.js`: Scripts para crear colecciones e insertar datos en MongoDB.
- `scripts/queries-setup.mongodb.js`: Scripts para crear colecciones e insertar datos en MongoDB.

## Instrucciones

1. Asegúrate de tener MongoDB instalado y en ejecución.
2. Usa el archivo `database-setup.mongodb.js` para configurar la base de datos:
   ```bash
   mongo < scripts/database-setup.mongodb.js
   ```
