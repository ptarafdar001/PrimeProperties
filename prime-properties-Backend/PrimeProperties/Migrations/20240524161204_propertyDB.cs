using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PrimeProperties.Migrations
{
    /// <inheritdoc />
    public partial class propertyDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Properties",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    City = table.Column<string>(type: "TEXT", nullable: false),
                    Location = table.Column<string>(type: "TEXT", nullable: false),
                    PropertyType = table.Column<string>(type: "TEXT", nullable: false),
                    NoOfBedroom = table.Column<int>(type: "INTEGER", nullable: false),
                    NoOfBathroom = table.Column<int>(type: "INTEGER", nullable: false),
                    SizeInSqft = table.Column<int>(type: "INTEGER", nullable: false),
                    NearbySchool = table.Column<string>(type: "TEXT", nullable: false),
                    NearbyHospital = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Price = table.Column<decimal>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Properties", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Properties");
        }
    }
}
