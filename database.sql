PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE [usuarios] ("id" integer PRIMARY KEY,"nombre" text,"puntos" integer);
CREATE TABLE [dispositivos] ("id" integer PRIMARY KEY,"imagen" integer);
INSERT INTO usuarios VALUES(0,"PabloGameplays", 999999);
INSERT INTO dispositivos VALUES(0, 1);
INSERT INTO dispositivos VALUES(1, 2);
INSERT INTO dispositivos VALUES(2, 3);
INSERT INTO dispositivos VALUES(3, 4);