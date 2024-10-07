PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE [usuarios] ("id" integer PRIMARY KEY AUTOINCREMENT, "nombre" text, "puntos" integer);
CREATE TABLE [dispositivos] ("id" integer PRIMARY KEY AUTOINCREMENT,"imagen" integer);
INSERT INTO usuarios VALUES(null,"PabloGameplays", 0);
INSERT INTO usuarios VALUES(null,"RamonElPiola", 0);
INSERT INTO usuarios VALUES(null,"IvanGarcia", 0);
INSERT INTO usuarios VALUES(null,"El Tronko", 0);