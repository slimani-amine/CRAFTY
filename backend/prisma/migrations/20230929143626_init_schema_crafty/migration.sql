-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Role` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `LastName` VARCHAR(191) NOT NULL,
    `BuisnessName` VARCHAR(191) NULL,
    `Email` VARCHAR(191) NOT NULL,
    `DateOfBirth` DATETIME(3) NULL,
    `Password` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `User_BuisnessName_key`(`BuisnessName`),
    UNIQUE INDEX `User_Email_key`(`Email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
