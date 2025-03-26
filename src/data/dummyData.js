export const videos = [
    {
      id: "1",
      title: "How to Build a React App in 10 Minutes",
      thumbnail: "https://media.istockphoto.com/id/1798628273/photo/senior-man-refuses-to-answer-to-a-call-from-unknown-number-scam-and-fraud-prevention-with.jpg?s=2048x2048&w=is&k=20&c=11Ma4l2AIj_6wtHEbyG-wGeBNQfl7TFuV8E4U2qnrWg=",
      channel: {
        name: "Dev Mastery",
        avatar: "https://via.placeholder.com/36",
        subscribers: "1.2M"
      },
      views: 1250000,
      likes: 45000,
      dislikes: 2100,
      uploadDate: new Date(2025, 2, 15),
      description: "Learn how to build a React application from scratch in just 10 minutes. This tutorial covers setup, components, state management, and deployment.",
      duration: "10:30",
      category: "technology"
    },
    {
      id: "2",
      title: "Modern JavaScript Features You Should Know",
      thumbnail: "https://via.placeholder.com/320x180",
      channel: {
        name: "JavaScript Guru",
        avatar: "https://via.placeholder.com/36",
        subscribers: "890K"
      },
      views: 750000,
      likes: 32000,
      dislikes: 1200,
      uploadDate: new Date(2025, 2, 10),
      description: "Discover the most powerful JavaScript features that can help you write cleaner, more efficient code. We'll cover ES6+ features every developer should master.",
      duration: "15:45",
      category: "technology"
    },
    {
      id: "3",
      title: "Ultimate CSS Grid Tutorial",
      thumbnail: "https://via.placeholder.com/320x180",
      channel: {
        name: "CSS Masters",
        avatar: "https://via.placeholder.com/36",
        subscribers: "750K"
      },
      views: 500000,
      likes: 28000,
      dislikes: 800,
      uploadDate: new Date(2025, 2, 18),
      description: "Everything you need to know about CSS Grid Layout. Learn how to create responsive web layouts easily with this comprehensive tutorial.",
      duration: "22:10",
      category: "technology"
    },
    {
      id: "4",
      title: "The Future of Web Development 2025",
      thumbnail: "https://via.placeholder.com/320x180",
      channel: {
        name: "TechTalks",
        avatar: "https://via.placeholder.com/36",
        subscribers: "2.5M"
      },
      views: 1800000,
      likes: 92000,
      dislikes: 4300,
      uploadDate: new Date(2025, 2, 5),
      description: "What technologies will shape the future of web development? Discover the trends, tools, and techniques that will dominate the industry in 2025 and beyond.",
      duration: "28:15",
      category: "technology"
    },
    {
      id: "5",
      title: "UI/UX Design Principles for Developers",
      thumbnail: "https://via.placeholder.com/320x180",
      channel: {
        name: "DesignCoder",
        avatar: "https://via.placeholder.com/36",
        subscribers: "980K"
      },
      views: 720000,
      likes: 54000,
      dislikes: 1500,
      uploadDate: new Date(2025, 2, 12),
      description: "Learn essential UI/UX design principles that every developer should know. This guide will help you create more user-friendly and visually appealing applications.",
      duration: "18:30",
      category: "design"
    },
    {
      id: "6",
      title: "Build a Full-Stack App with Node.js and React",
      thumbnail: "https://via.placeholder.com/320x180",
      channel: {
        name: "Fullstack Ninjas",
        avatar: "https://via.placeholder.com/36",
        subscribers: "1.8M"
      },
      views: 980000,
      likes: 67000,
      dislikes: 2800,
      uploadDate: new Date(2025, 2, 8),
      description: "Step-by-step tutorial on building a complete web application using Node.js for the backend and React for the frontend. Learn how to connect the two and create a seamless user experience.",
      duration: "45:20",
      category: "technology"
    },
    {
      id: "7",
      title: "Advanced React Hooks Patterns",
      thumbnail: "https://via.placeholder.com/320x180",
      channel: {
        name: "React Experts",
        avatar: "https://via.placeholder.com/36",
        subscribers: "1.4M"
      },
      views: 830000,
      likes: 62000,
      dislikes: 1800,
      uploadDate: new Date(2025, 2, 16),
      description: "Master the art of using React Hooks with advanced patterns and techniques. Learn how to write cleaner, more efficient React components with these powerful hooks.",
      duration: "32:45",
      category: "technology"
    },
    {
      id: "8",
      title: "Responsive Design in 2025: New Techniques",
      thumbnail: "https://via.placeholder.com/320x180",
      channel: {
        name: "WebWizards",
        avatar: "https://via.placeholder.com/36",
        subscribers: "950K"
      },
      views: 590000,
      likes: 43000,
      dislikes: 1200,
      uploadDate: new Date(2025, 2, 20),
      description: "Discover the latest techniques for creating responsive websites that work flawlessly across all devices. Learn about container queries, fluid typography, and more.",
      duration: "24:10",
      category: "design"
    }
  ];
  
  export const comments = [
    {
      id: "c1",
      videoId: "1",
      user: {
        name: "Jane Smith",
        avatar: "https://via.placeholder.com/36"
      },
      text: "This tutorial saved me so much time! I was able to get my React app up and running in no time.",
      likes: 245,
      replies: 12,
      date: new Date(2025, 2, 16)
    },
    {
      id: "c2",
      videoId: "1",
      user: {
        name: "Mike Johnson",
        avatar: "https://via.placeholder.com/36"
      },
      text: "Great content! Would love to see a follow-up on adding authentication to the app.",
      likes: 184,
      replies: 8,
      date: new Date(2025, 2, 16)
    },
    {
      id: "c3",
      videoId: "2",
      user: {
        name: "Alex Williams",
        avatar: "https://via.placeholder.com/36"
      },
      text: "JavaScript has come so far in the last few years. These features are game-changers for productivity!",
      likes: 156,
      replies: 5,
      date: new Date(2025, 2, 11)
    }
  ];
  
  // Helper function to format view counts
  export const formatViewCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
  };
  
  // Helper function to format time elapsed
  export const formatTimeElapsed = (date) => {
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    
    if (diffDays > 30) {
      const months = Math.floor(diffDays / 30);
      return `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else if (diffHours > 0) {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else {
      return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
    }
  };