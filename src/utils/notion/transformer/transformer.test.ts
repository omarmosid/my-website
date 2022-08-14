import { annotationsToHtml, transformer } from "./transformer";

const sampleRawResponse = {
  id: "118070d5-010d-482e-b8a0-8528b110db9a",
  post: {
    object: "page",
    id: "118070d5-010d-482e-b8a0-8528b110db9a",
    created_time: "2022-07-06T04:52:00.000Z",
    last_edited_time: "2022-07-06T05:09:00.000Z",
    created_by: {
      object: "user",
      id: "d3e827dd-9c1d-4d7a-9c0a-86b7c2c2bd7c",
    },
    last_edited_by: {
      object: "user",
      id: "d3e827dd-9c1d-4d7a-9c0a-86b7c2c2bd7c",
    },
    cover: {
      type: "external",
      external: {
        url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
      },
    },
    icon: null,
    parent: {
      type: "database_id",
      database_id: "b416e845-fe8e-4c6e-ac07-a026d86b376c",
    },
    archived: false,
    properties: {
      Tags: {
        id: "G%3B%5B%7C",
        type: "multi_select",
        multi_select: [],
      },
      Name: {
        id: "title",
        type: "title",
        title: [
          {
            type: "text",
            text: {
              content: "Test Post",
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text: "Test Post",
            href: null,
          },
        ],
      },
    },
    url: "https://www.notion.so/Test-Post-118070d5010d482eb8a08528b110db9a",
  },
  blocks: [
    {
      object: "block",
      id: "8cc1e496-d320-42ad-86fa-faef6bf65554",
      parent: {
        type: "page_id",
        page_id: "118070d5-010d-482e-b8a0-8528b110db9a",
      },
      created_time: "2022-07-06T05:08:00.000Z",
      last_edited_time: "2022-07-06T05:09:00.000Z",
      created_by: {
        object: "user",
        id: "d3e827dd-9c1d-4d7a-9c0a-86b7c2c2bd7c",
      },
      last_edited_by: {
        object: "user",
        id: "d3e827dd-9c1d-4d7a-9c0a-86b7c2c2bd7c",
      },
      has_children: false,
      archived: false,
      type: "paragraph",
      paragraph: {
        rich_text: [
          {
            type: "text",
            text: {
              content: "sfdsfdfsdfs",
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text: "sfdsfdfsdfs",
            href: null,
          },
        ],
        color: "default",
      },
    },
    {
      object: "block",
      id: "1dd58437-dcd0-4601-a588-fef53302cda2",
      parent: {
        type: "page_id",
        page_id: "118070d5-010d-482e-b8a0-8528b110db9a",
      },
      created_time: "2022-07-06T05:09:00.000Z",
      last_edited_time: "2022-07-06T05:09:00.000Z",
      created_by: {
        object: "user",
        id: "d3e827dd-9c1d-4d7a-9c0a-86b7c2c2bd7c",
      },
      last_edited_by: {
        object: "user",
        id: "d3e827dd-9c1d-4d7a-9c0a-86b7c2c2bd7c",
      },
      has_children: false,
      archived: false,
      type: "paragraph",
      paragraph: {
        rich_text: [
          {
            type: "text",
            text: {
              content: "asdasdasd",
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text: "asdasdasd",
            href: null,
          },
        ],
        color: "default",
      },
    },
  ],
};

describe("Transformer works", () => {
  it("returns empty array", () => {
    const blocks = sampleRawResponse.blocks;
    const result = transformer(blocks);
    expect(result).toStrictEqual([]);
  });
});

describe("Anno works", () => {
  it("bold Anno applies bold tag", () => {
    const annotation = {
      bold: true,
      italic: false,
      strikethrough: false,
      underline: false,
      code: false,
      color: "default",
    };

    const text = "Haha Haha";

    const result = annotationsToHtml(annotation, text);
    expect(result).toStrictEqual("<strong>Haha Haha</strong>");
  });

  it("italic Anno applies em  tag", () => {
    const annotation = {
      bold: false,
      italic: true,
      strikethrough: false,
      underline: false,
      code: false,
      color: "default",
    };

    const text = "Haha Haha";

    const result = annotationsToHtml(annotation, text);
    expect(result).toStrictEqual("<em>Haha Haha</em>");
  });

  it("bold and italic Anno applies strong and em tag", () => {
    const annotation = {
      bold: true,
      italic: true,
      strikethrough: false,
      underline: false,
      code: false,
      color: "default",
    };

    const text = "Haha Haha";

    const result = annotationsToHtml(annotation, text);
    expect(result).toStrictEqual("<em><strong>Haha Haha</strong></em>");
  });

  it("bold, italic and underline Anno applies strong, em, u tag", () => {
    const annotation = {
      bold: true,
      italic: true,
      strikethrough: false,
      underline: true,
      code: false,
      color: "default",
    };

    const text = "Haha Haha";

    const result = annotationsToHtml(annotation, text);
    expect(result).toStrictEqual("<u><em><strong>Haha Haha</strong></em></u>");
  });
});
