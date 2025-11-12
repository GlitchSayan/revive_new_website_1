import Image from "next/image";

interface TestimonialCardProps {
  testimonial: string;
  author: string;
  rating: number;
  avatar?: string;
  position?: "left" | "right";
}

export default function TestimonialCard({
  testimonial,
  author,
  rating,
  avatar,
  position = "left",
}: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <div
      className={`flex items-start gap-4 ${
        position === "right" ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
          {avatar ? (
            <Image
              src={avatar}
              alt={author}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
              {author.charAt(0)}
            </div>
          )}
        </div>
      </div>
      <div
        className={`flex-1 bg-white p-6 rounded-2xl shadow-lg ${
          position === "right" ? "mr-8" : "ml-8"
        }`}
      >
        <p className="text-gray-700 mb-4 leading-relaxed">{testimonial}</p>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-gray-900">{author}</h4>
            <div className="flex mt-1">{renderStars(rating)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
