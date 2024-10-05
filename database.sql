PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE [usuarios] ("id" integer PRIMARY KEY,"nombre" text,"puntos" integer);
CREATE TABLE [dispositivos] ("id" integer PRIMARY KEY,"nimagen" integer);
INSERT INTO usuarios VALUES(0,"PabloGameplays", 999999);
