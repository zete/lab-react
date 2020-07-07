using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DataPersistance.Migrations
{
    public partial class MigraDemo1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pelucas");

            migrationBuilder.CreateTable(
                name: "Empleados",
                columns: table => new
                {
                    Nombre = table.Column<string>(nullable: true),
                    Nacimiento = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Empleados");

            migrationBuilder.CreateTable(
                name: "Pelucas",
                columns: table => new
                {
                    Color = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });
        }
    }
}
