CREATE DATABASE IF NOT EXISTS calendario_civico;

-- Usar la base de datos creada
USE calendario_civico;

-- Crear la tabla de fechas importantes con relación a las ODS
CREATE TABLE IF NOT EXISTS fechas_importantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    evento VARCHAR(255) NOT NULL,
    ods VARCHAR(255) NOT NULL
);

-- Insertar datos en la tabla con eventos relacionados a ODS
INSERT INTO fechas_importantes (fecha, evento, ods) VALUES
('2024-01-01', 'Año Nuevo', 'N/A'),
('2024-03-08', 'Día Internacional de la Mujer', 'ODS 5: Igualdad de Género'),
('2024-04-22', 'Día de la Tierra', 'ODS 13: Acción por el Clima'),
('2024-05-01', 'Día Internacional de los Trabajadores', 'N/A'),
('2024-06-05', 'Día Mundial del Medio Ambiente', 'ODS 15: Vida de Ecosistemas Terrestres'),
('2024-07-11', 'Día Mundial de la Población', 'ODS 11: Ciudades y Comunidades Sostenibles'),
('2024-09-21', 'Día Internacional de la Paz', 'ODS 16: Paz, Justicia e Instituciones Sólidas'),
('2024-10-16', 'Día Mundial de la Alimentación', 'ODS 2: Hambre Cero'),
('2024-11-20', 'Día Universal del Niño', 'ODS 4: Educación de Calidad'),
('2024-12-01', 'Día Mundial de la Lucha contra el SIDA', 'ODS 3: Salud y Bienestar');

-- Consultar todos los datos de la tabla de fechas importantes
SELECT * FROM fechas_importantes;