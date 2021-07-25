using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HelloGrpc.Migrations
{
    public partial class AddCreationTime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Creation",
                table: "Items",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Creation",
                table: "Items");
        }
    }
}
