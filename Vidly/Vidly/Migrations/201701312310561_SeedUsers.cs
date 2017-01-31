namespace Vidly.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SeedUsers : DbMigration
    {
        public override void Up()
        {
            Sql(@"
                INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'd1df6998-76b6-4d93-92d2-ceb24c5235f9', N'guest@vidly.com', 0, N'AC86edEVlDcwwzkQfRcr+1kV42TUIpsdkuxBTPCc8aV0r7syAGT3YjplIhPqCXsApA==', N'5f08f321-842e-465d-b747-52c5bf29e63b', NULL, 0, 0, NULL, 1, 0, N'guest@vidly.com')
                INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'ed2793bf-986c-4d96-ba41-1904f17889bd', N'admin@vidly.com', 0, N'AGE+zT9efi1HBdrPPh6LDE1ZuUg3khc2KqX7VDB/apB/Gl054tSfPRKacxfnlafBQg==', N'4a24f09e-6fe0-4a61-9954-23c6403812b1', NULL, 0, 0, NULL, 1, 0, N'admin@vidly.com')
                INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'd9cf80d7-b7da-433f-b4a9-9172d981055b', N'CanManageMovies')
                INSERT INTO [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'ed2793bf-986c-4d96-ba41-1904f17889bd', N'd9cf80d7-b7da-433f-b4a9-9172d981055b')
            ");
        }
        
        public override void Down()
        {
        }
    }
}
