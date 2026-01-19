const Descriptionbox = () => {
  return (
    <div
      className="
    my-[120px]
    mx-[170px]
    max-[1280px]:mx-[50px]
    max-[1024px]:mx-[30px]
    max-[800px]:mx-[20px]
    max-[500px]:mx-[10px]
  "
    >
      {/* Nav */}
      <div className="flex">
        <div
          className="
        flex items-center justify-center
        text-[16px] font-semibold
        w-[171px] h-[70px]
        border border-[#d0d0d0]
      "
        >
          Description
        </div>

        <div
          className="
        flex items-center justify-center
        text-[16px] font-semibold
        w-[171px] h-[70px]
        border border-[#d0d0d0]
        bg-[#FBFBFB] text-[#555]
      "
        >
          Reviews (122)
        </div>
      </div>

      {/* Description Content */}
      <div
        className="
      flex flex-col gap-[25px]
      border border-[#d0d0d0]
      p-[50px]
      text-[20px]
    "
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tenetur,
          corporis blanditiis rerum necessitatibus similique tempore eum pariatur
          repellendus enim, cumque consectetur itaque? Quasi voluptatum, nostrum
          animi dolores voluptates iure. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Similique quas debitis, recusandae illo earum harum
          numquam in aut eveniet, eligendi accusantium soluta nulla at fuga quaerat
          quos ut et labore?
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor voluptates
          eligendi pariatur corrupti laborum eum? Consequuntur accusamus eligendi
          nemo vel aut nobis beatae, sunt commodi ullam asperiores laborum animi eum!
        </p>
      </div>
    </div>
  );
};

export default Descriptionbox;
