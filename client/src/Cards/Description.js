import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const descriptions = {
  "To Kill a Mockingbird": "Narrated by 10-year-old Scout Finch, To Kill a Mockingbird centers on her father, small-town lawyer Atticus Finch, and his fight against racial prejudice in the 1930s Deep South. You may have read this beloved coming-of-age story when you were in school, but it’s worth revisiting this classic as an adult. Poignant and powerful, the central themes remain timeless and timely.",
  "A Tree Grows in Brooklyn": "A Tree Grows in Brooklyn centers on 11-year-old Francie Nolan, who lives in the Williamsburg section of Brooklyn with her Irish and Austrian immigrant parents and younger brother, Neely. When her father dies, the family reels, but Francie is determined to pursue her dreams of finishing her education and going to college. This poignant coming-of-age story is a beautiful and timeless tale of resilience and hope.",
  "The Book Thief": "In this #1 New York Times bestseller, it’s 1939 Nazi Germany and Liesel Meminger is a young foster girl who steals for her survival. Then she discovers books. Liesel learns to read and shares her stolen books with her neighbors and the Jewish man who hides in her basement. Markus Zusak, author of I Am the Messenger, has written a heartbreaking tale of the power and joy books offer, even in the darkest days.",
  "Brave New World" : "Brave New World is a cautionary tale about the future that remains as relevant today as when it was first published in 1932. In this technologically advanced dystopia, author Aldous Huxley envisions a world where humans are controlled through genetic engineering and behavioral conditioning. When one man begins to question his carefully controlled world, he is forced to face the truth about the very nature and purpose of his life.",
  "The Underground Railroad Book" :"Colson Whitehead’s The Underground Railroad took the literary world by storm in 2016, earning the author the #1 spot on the New York Times bestseller list, as well as a Pulitzer Prize and National Book Award. Envisioning the Underground Railroad as an actual network of train tracks throughout the south, Whitehead weaves a complex saga that stretches from the days before the Civil War to contemporary life for African Americans. This compelling novel is unlike anything you’ve ever read and makes a thoughtful, conversation-provoking book club selection.",
  "All the Light We Cannot See" : "This New York Times bestseller centers on the lives of Marie-Laure, a blind French girl, and Werner, an orphaned German boy. Beautifully written and richly detailed, All the Light We Cannot See is a crowning achievement in historical fiction. Doerr captures the devastation of World War II and the ways in which good triumphs over evil in even the darkest circumstances.",
  "The Call of the Wild " : "First published in 1903, The Call of the Wild remains the quintessential wilderness tale. Set during the Klondike Gold Rush, Buck is a mixed breed dog caught between domesticity and the wild. He bonds with a prospector but his survival depends on his primitive instincts. Call of the Wild is a harrowing adventure story for all ages!",
  "The Joy Luck Club" : "Amy Tan’s The Joy Luck Club is a tender and amusing familial story that every mother and daughter should read together. Tan explores the lives of four Chinese immigrant women who meet in San Francisco in 1949. Their relationships with their daughters bring them joy and pain, and reveal universal truths about mothers and daughters. Perhaps the best known of Tan’s work, The Joy Luck Club is a contemporary classic about the bonds of family and shared culture.",
  "The Great Gatsby":"Jay Gatsby loves money, notoriety, and the beautiful Daisy Buchanan — and readers have loved The Great Gatsby since its 1925 release. A classic tale of passion, obsession, and excess, it’s one of the greatest novels of the 20th century and the crowning achievement of F. Scott Fitzgerald’s impressive literary career. This finely crafted homage to 1920s America sparkles like a glass of the finest champagne, capturing the romance and beauty of the Jazz Age."
};

function Description() {
  const { text, price } = useParams();
  const description = descriptions[decodeURIComponent(text)];
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/payment', { state: { bookTitle: text, bookPrice: price } });
  };

  return (
    <div>
      <h1>{text}</h1>
      <p>{description}</p>
      <p><strong>Price:</strong> {price}</p>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
}

export default Description;
