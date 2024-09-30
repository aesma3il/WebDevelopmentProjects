-- Create Users Table
CREATE TABLE Users (
    UserId INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Bio TEXT,
    PhotoUrl VARCHAR(255),
    LinkedinUrl VARCHAR(255),
    GithubUrl VARCHAR(255),
    CreatedAt DATETIME DEFAULT GETDATE(),
    UpdatedAt DATETIME DEFAULT GETDATE(),
    PasswordHash VARCHAR(255) NOT NULL,
    Role VARCHAR(50) DEFAULT 'User', -- e.g., 'Admin', 'User'
    IsProfilePublic BIT DEFAULT 1 -- 1 for public, 0 for private
);

-- Create Projects Table
CREATE TABLE Projects (
    ProjectId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    TechnologiesUsed TEXT,
    LiveDemoLink VARCHAR(255),
    SourceCodeLink VARCHAR(255),
    ImageUrl VARCHAR(255),
    VideoUrl VARCHAR(255) NULL,
    Status VARCHAR(50) DEFAULT 'Completed', -- e.g., 'Completed', 'In Progress', 'Archived'
    Tags VARCHAR(255), -- Comma-separated tags
    CreatedAt DATETIME DEFAULT GETDATE(),
    UpdatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (UserId) REFERENCES Users(UserId) ON DELETE CASCADE
);

-- Create BlogPosts Table
CREATE TABLE BlogPosts (
    PostId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT,
    Title VARCHAR(255) NOT NULL,
    Content TEXT,
    DatePublished DATETIME DEFAULT GETDATE(),
    Category VARCHAR(255),
    MetaTitle VARCHAR(255), -- For SEO
    MetaDescription VARCHAR(255), -- For SEO
    Keywords VARCHAR(255), -- For SEO
    FeaturedImageUrl VARCHAR(255), -- Featured image for the post
    PostStatus VARCHAR(50) DEFAULT 'Published', -- e.g., 'Published', 'Draft', 'Archived'
    CreatedAt DATETIME DEFAULT GETDATE(),
    UpdatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (UserId) REFERENCES Users(UserId) ON DELETE CASCADE
);

-- Create Comments Table
CREATE TABLE Comments (
    CommentId INT IDENTITY(1,1) PRIMARY KEY,
    PostId INT,
    UserName VARCHAR(255),
    Email VARCHAR(255),
    Content TEXT,
    CreatedAt DATETIME DEFAULT GETDATE(),
    Status VARCHAR(50) DEFAULT 'Pending', -- e.g., 'Approved', 'Pending', 'Spam'
    ParentCommentId INT NULL, -- For threaded comments
    FOREIGN KEY (PostId) REFERENCES BlogPosts(PostId) ON DELETE CASCADE,
    FOREIGN KEY (ParentCommentId) REFERENCES Comments(CommentId) ON DELETE CASCADE
);

-- Create Testimonials Table
CREATE TABLE Testimonials (
    TestimonialId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT,
    ClientName VARCHAR(255),
    Content TEXT,
    StarRating INT CHECK (StarRating >= 1 AND StarRating <= 5),
    CreatedAt DATETIME DEFAULT GETDATE(),
    DateGiven DATETIME DEFAULT GETDATE(),
    Status VARCHAR(50) DEFAULT 'Approved', -- e.g., 'Approved', 'Pending'
    FOREIGN KEY (UserId) REFERENCES Users(UserId) ON DELETE CASCADE
);

-- Create ContactMessages Table
CREATE TABLE ContactMessages (
    MessageId INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(255),
    Email VARCHAR(255),
    Message TEXT,
    CreatedAt DATETIME DEFAULT GETDATE()
);

-- Create Skills Table
CREATE TABLE Skills (
    SkillId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT,
    SkillName VARCHAR(255),
    Proficiency INT CHECK (Proficiency >= 1 AND Proficiency <= 10),
    Category VARCHAR(255), -- For categorizing skills
    YearsOfExperience INT, -- Number of years of experience
    CreatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (UserId) REFERENCES Users(UserId) ON DELETE CASCADE
);

-- Create AuditLogs Table
CREATE TABLE AuditLogs (
    LogId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT,
    Action VARCHAR(255),
    TableAffected VARCHAR(255),
    RecordId INT,
    CreatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (UserId) REFERENCES Users(UserId) ON DELETE SET NULL
);

-- Create Categories Table
CREATE TABLE Categories (
    CategoryId INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(255) UNIQUE NOT NULL,
    Description TEXT
);

-- Create ProjectCategories Table (Many-to-Many)
CREATE TABLE ProjectCategories (
    ProjectId INT,
    CategoryId INT,
    PRIMARY KEY (ProjectId, CategoryId),
    FOREIGN KEY (ProjectId) REFERENCES Projects(ProjectId) ON DELETE CASCADE,
    FOREIGN KEY (CategoryId) REFERENCES Categories(CategoryId) ON DELETE CASCADE
);

-- Create BlogCategories Table (Many-to-Many)
CREATE TABLE BlogCategories (
    PostId INT,
    CategoryId INT,
    PRIMARY KEY (PostId, CategoryId),
    FOREIGN KEY (PostId) REFERENCES BlogPosts(PostId) ON DELETE CASCADE,
    FOREIGN KEY (CategoryId) REFERENCES Categories(CategoryId) ON DELETE CASCADE
);

-- Create Likes Table (optional)
CREATE TABLE Likes (
    LikeId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT,
    PostId INT NULL,
    ProjectId INT NULL,
    CreatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (UserId) REFERENCES Users(UserId) ON DELETE CASCADE,
    FOREIGN KEY (PostId) REFERENCES BlogPosts(PostId) ON DELETE CASCADE,
    FOREIGN KEY (ProjectId) REFERENCES Projects(ProjectId) ON DELETE CASCADE
);

-- Create Notifications Table (optional)
CREATE TABLE Notifications (
    NotificationId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT,
    Message TEXT,
    IsRead BIT DEFAULT 0,
    CreatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (UserId) REFERENCES Users(UserId) ON DELETE CASCADE
);
