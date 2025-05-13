// ================== 主题数据 ==================
const carouselThemes = [
    {
      title: '扉间幻境',
      desc: '当莫奈的光影实验，遇上量子纠缠的浪漫',
      thumb: 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/RWJ/扉间幻境/cover.jpg',
      previews: ['https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/RWJ/扉间幻境/cover.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/RWJ/扉间幻境/preview_icons_0.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/RWJ/扉间幻境/preview_unlock_0.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/RWJ/扉间幻境/preview_unlock_1.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/RWJ/扉间幻境/preview_unlock_2.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/RWJ/扉间幻境/preview_widget_0.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/RWJ/扉间幻境/preview_widget_1.jpg'],
      tags: ['华为荣耀', '动态锁屏', '自定义', '自制'],
      author: { name: "RWJ", avatar: "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/RWJ/avatar.jpg" },
      downloads: [
        { name: '百度网盘', url: '#' },
        { name: '备用直链', url: 'https://example.com/theme3.zip' }
      ]
    },
    {
      title: '灰原哀',
      desc: '本主题由 酷安@RWJ__ 制作；未经允许请勿二传、倒卖',
      thumb: 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/RWJ/灰原哀/cover.jpg',
      previews: ['https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/RWJ/灰原哀/cover.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/RWJ/灰原哀/preview_unlock_0.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/RWJ/灰原哀/preview_widget_0.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/RWJ/灰原哀/preview_widget_1.png'],
      tags: ['华为', '一镜到底', '自制'],
      author: { name: "RWJ", avatar: "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/RWJ/avatar.jpg" },
      downloads: [
        { name: '百度网盘', url: '#' }
      ]
    },
    {
      title: '光宇',
      desc: 'HarmonyOS NEXT 5.0 预置主题，由RWJ移植',
      thumb: 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/光宇/cover.jpg',
      previews: ['https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/光宇/cover.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/光宇/preview_unlock_0.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/光宇/preview_widget_0.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/光宇/preview_widget_1.png', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/光宇/preview_video_image.jpg'],
      tags: ['华为', '预置', '一镜到底', '自制'],
      author: { name: "PresetTheme", avatar: "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png" },
      downloads: [
        { name: '百度网盘', url: '#' }
      ]
    },
    {
        title: '织锦青',
        desc: '华为Mate 70系列预置主题，RWJ移植',
        thumb: 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/织锦青/cover.jpg',
        previews: ['https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/织锦青/cover.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/织锦青/preview_unlock_0.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/织锦青/preview_widget_0.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/织锦青/preview_widget_1.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/织锦青/preview_video_image.png', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/织锦青/other_preview_video_image.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/织锦青/other_preview_unlock_0.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/织锦青/other_cover.jpg'],
        tags: ['华为', '预置', '一镜到底'],
        author: { name: "PresetTheme", avatar: "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png" },
        downloads: [
          { name: '百度网盘', url: '#' }
        ]
      },
      {
        title: '潮涌',
        desc: 'HarmonyOS NEXT 5.0 预置主题，由RWJ移植',
        thumb: 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/潮涌/cover.jpg',
        previews: ['https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/潮涌/cover.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/潮涌/preview_unlock_0.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/潮涌/preview_widget_0.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/潮涌/preview_video_image.png'],
        tags: ['华为', '预置', '一镜到底'],
        author: { name: "PresetTheme", avatar: "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png" },
        downloads: [
          { name: '百度网盘', url: '#' }
        ]
      },
      {
        title: '光场',
        desc: 'HarmonyOS NEXT 5.0 预置主题，由RWJ移植',
        thumb: 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/光场/cover.jpg',
        previews: ['https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/光场/cover.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/光场/preview_unlock_0.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/光场/preview_widget_0.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/光场/preview_video_image.png'],
        tags: ['华为', '预置', '一镜到底'],
        author: { name: "PresetTheme", avatar: "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png" },
        downloads: [
          { name: '百度网盘', url: '#' }
        ]
      },
      {
        title: '寰宇',
        desc: 'HarmonyOS NEXT 5.0 预置主题，由RWJ移植',
        thumb: 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/寰宇/cover.jpg',
        previews: ['https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/寰宇/cover.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/寰宇/preview_unlock_0.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/寰宇/preview_widget_0.jpg', 'https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/寰宇/preview_video_image.png'],
        tags: ['华为', '预置', '一镜到底'],
        author: { name: "PresetTheme", avatar: "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png" },
        downloads: [
          { name: '百度网盘', url: '#' }
        ]
      },
      {
        "title": "冰晶",
        "desc": "华为Pura 70系列 预置主题",
        "thumb": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/冰晶/cover.jpg",
        "previews": [
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/冰晶/cover.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/冰晶/preview_icons_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/冰晶/preview_icons_1.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/冰晶/preview_unlock_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/冰晶/preview_video_image.png",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/冰晶/preview_widget_0.jpg"
        ],
        "tags": [
          "华为",
          "预置",
          "一镜到底"
        ],
        "author": {
          "name": "PresetTheme",
          "avatar": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png"
        },
        "downloads": [
          {
            "name": "百度网盘",
            "url": "#"
          }
        ]
      },
      {
        "title": "墨黑",
        "desc": "华为Pura 70系列 预置主题",
        "thumb": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/墨黑/cover.jpg",
        "previews": [
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/墨黑/cover.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/墨黑/preview_icons_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/墨黑/preview_icons_1.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/墨黑/preview_unlock_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/墨黑/preview_video_image.png",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/墨黑/preview_widget_0.jpg"
        ],
        "tags": [
          "华为",
          "预置",
          "一镜到底"
        ],
        "author": {
          "name": "PresetTheme",
          "avatar": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png"
        },
        "downloads": [
          {
            "name": "百度网盘",
            "url": "#"
          }
        ]
      },
      {
        "title": "弦乐",
        "desc": "华为Pura 70系列 预置主题",
        "thumb": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/弦乐/cover.jpg",
        "previews": [
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/弦乐/cover.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/弦乐/preview_icons_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/弦乐/preview_icons_1.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/弦乐/preview_unlock_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/弦乐/preview_video_image.png",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/弦乐/preview_widget_0.jpg"
        ],
        "tags": [
          "华为",
          "预置",
          "一镜到底"
        ],
        "author": {
          "name": "PresetTheme",
          "avatar": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png"
        },
        "downloads": [
          {
            "name": "百度网盘",
            "url": "#"
          }
        ]
      },
      {
        "title": "律动",
        "desc": "华为Pura 70系列 预置主题",
        "thumb": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/律动/cover.jpg",
        "previews": [
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/律动/cover.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/律动/preview_icons_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/律动/preview_icons_1.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/律动/preview_unlock_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/律动/preview_video_image.png",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/律动/preview_widget_0.jpg"
        ],
        "tags": [
          "华为",
          "预置",
          "一镜到底"
        ],
        "author": {
          "name": "PresetTheme",
          "avatar": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png"
        },
        "downloads": [
          {
            "name": "百度网盘",
            "url": "#"
          }
        ]
      },
      {
        "title": "星芒",
        "desc": "华为Pura 70系列 预置主题",
        "thumb": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/星芒/cover.jpg",
        "previews": [
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/星芒/cover.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/星芒/preview_icons_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/星芒/preview_icons_1.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/星芒/preview_unlock_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/星芒/preview_video_image.png",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/星芒/preview_widget_0.jpg"
        ],
        "tags": [
          "华为",
          "预置",
          "一镜到底"
        ],
        "author": {
          "name": "PresetTheme",
          "avatar": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png"
        },
        "downloads": [
          {
            "name": "百度网盘",
            "url": "#"
          }
        ]
      },
      {
        "title": "暮光",
        "desc": "华为Pura 70系列 预置主题",
        "thumb": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/暮光/cover.jpg",
        "previews": [
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/暮光/cover.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/暮光/preview_icons_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/暮光/preview_icons_1.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/暮光/preview_unlock_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/暮光/preview_video_image.png",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/暮光/preview_widget_0.jpg"
        ],
        "tags": [
          "华为",
          "预置",
          "一镜到底"
        ],
        "author": {
          "name": "PresetTheme",
          "avatar": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png"
        },
        "downloads": [
          {
            "name": "百度网盘",
            "url": "#"
          }
        ]
      },
      {
        "title": "月影",
        "desc": "华为Pura 70系列 预置主题",
        "thumb": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/月影/cover.jpg",
        "previews": [
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/月影/cover.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/月影/preview_icons_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/月影/preview_icons_1.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/月影/preview_unlock_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/月影/preview_video_image.png",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/月影/preview_widget_0.jpg"
        ],
        "tags": [
          "华为",
          "预置",
          "一镜到底"
        ],
        "author": {
          "name": "PresetTheme",
          "avatar": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png"
        },
        "downloads": [
          {
            "name": "百度网盘",
            "url": "#"
          }
        ]
      },
      {
        "title": "梦境",
        "desc": "华为Pura 70系列 预置主题",
        "thumb": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/梦境/cover.jpg",
        "previews": [
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/梦境/cover.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/梦境/preview_icons_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/梦境/preview_icons_1.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/梦境/preview_unlock_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/梦境/preview_video_image.png",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/梦境/preview_widget_0.jpg"
        ],
        "tags": [
          "华为",
          "预置",
          "一镜到底"
        ],
        "author": {
          "name": "PresetTheme",
          "avatar": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png"
        },
        "downloads": [
          {
            "name": "百度网盘",
            "url": "#"
          }
        ]
      },
      {
        "title": "樱枚",
        "desc": "华为Pura 70系列 预置主题",
        "thumb": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/樱枚/cover.jpg",
        "previews": [
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/樱枚/cover.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/樱枚/preview_icons_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/樱枚/preview_icons_1.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/樱枚/preview_unlock_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/樱枚/preview_video_image.png",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/樱枚/preview_widget_0.jpg"
        ],
        "tags": [
          "华为",
          "预置",
          "一镜到底"
        ],
        "author": {
          "name": "PresetTheme",
          "avatar": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png"
        },
        "downloads": [
          {
            "name": "百度网盘",
            "url": "#"
          }
        ]
      },
      {
        "title": "瑞红",
        "desc": "华为Pura 70系列 预置主题",
        "thumb": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/瑞红/cover.jpg",
        "previews": [
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/瑞红/cover.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/瑞红/preview_icons_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/瑞红/preview_icons_1.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/瑞红/preview_unlock_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/瑞红/preview_video_image.png",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/瑞红/preview_widget_0.jpg"
        ],
        "tags": [
          "华为",
          "预置",
          "一镜到底"
        ],
        "author": {
          "name": "PresetTheme",
          "avatar": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png"
        },
        "downloads": [
          {
            "name": "百度网盘",
            "url": "#"
          }
        ]
      },
      {
        "title": "绯霞",
        "desc": "华为Pura 70系列 预置主题",
        "thumb": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/绯霞/cover.jpg",
        "previews": [
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/绯霞/cover.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/绯霞/preview_icons_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/绯霞/preview_icons_1.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/绯霞/preview_unlock_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/绯霞/preview_video_image.png",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/绯霞/preview_widget_0.jpg"
        ],
        "tags": [
          "华为",
          "预置",
          "一镜到底"
        ],
        "author": {
          "name": "PresetTheme",
          "avatar": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png"
        },
        "downloads": [
          {
            "name": "百度网盘",
            "url": "#"
          }
        ]
      },
      {
        "title": "银晖",
        "desc": "华为Pura 70系列 预置主题",
        "thumb": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/银晖/cover.jpg",
        "previews": [
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/银晖/cover.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/银晖/preview_icons_1.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/银晖/preview_unlock_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/银晖/preview_video_image.png",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/银晖/preview_widget_0.jpg"
        ],
        "tags": [
          "华为",
          "预置",
          "一镜到底"
        ],
        "author": {
          "name": "PresetTheme",
          "avatar": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png"
        },
        "downloads": [
          {
            "name": "百度网盘",
            "url": "#"
          }
        ]
      },
      {
        "title": "雅韵",
        "desc": "华为Pura 70系列 预置主题",
        "thumb": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/雅韵/cover.jpg",
        "previews": [
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/雅韵/cover.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/雅韵/preview_icons_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/雅韵/preview_icons_1.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/雅韵/preview_unlock_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/雅韵/preview_video_image.png",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/雅韵/preview_widget_0.jpg"
        ],
        "tags": [
          "华为",
          "预置",
          "一镜到底"
        ],
        "author": {
          "name": "PresetTheme",
          "avatar": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png"
        },
        "downloads": [
          {
            "name": "百度网盘",
            "url": "#"
          }
        ]
      },
      {
        "title": "雪域",
        "desc": "华为Pura 70系列 预置主题",
        "thumb": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/雪域/cover.jpg",
        "previews": [
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/雪域/cover.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/雪域/preview_icons_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/雪域/preview_icons_1.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/雪域/preview_unlock_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/雪域/preview_video_image.png",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/雪域/preview_widget_0.jpg"
        ],
        "tags": [
          "华为",
          "预置",
          "一镜到底"
        ],
        "author": {
          "name": "PresetTheme",
          "avatar": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png"
        },
        "downloads": [
          {
            "name": "百度网盘",
            "url": "#"
          }
        ]
      },
      {
        "title": "青空",
        "desc": "华为Pura 70系列 预置主题",
        "thumb": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/青空/cover.jpg",
        "previews": [
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/青空/cover.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/青空/preview_icons_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/青空/preview_icons_1.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/青空/preview_unlock_0.jpg",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/青空/preview_video_image.png",
          "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/青空/preview_widget_0.jpg"
        ],
        "tags": [
          "华为",
          "预置",
          "一镜到底"
        ],
        "author": {
          "name": "PresetTheme",
          "avatar": "https://cdn.jsdelivr.net/gh/HWrwj/rwjthemes/PresetTheme/avatar.png"
        },
        "downloads": [
          {
            "name": "百度网盘",
            "url": "#"
          }
        ]
      }      
    ];
  
  // 你的小卡片区全部主题数据（可继续扩展）
  const cardThemes = [...carouselThemes];
  
  // ================== 懒加载核心 ==================
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });
  
  // ================== 轮播渲染 ==================
  function renderCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselIndicators = document.getElementById('carouselIndicators');
    carouselTrack.innerHTML = '';
    carouselIndicators.innerHTML = '';
    carouselThemes.forEach((theme, idx) => {
      const item = document.createElement('div');
      item.className = 'carousel-item' + (idx === 0 ? ' active' : '');
      item.tabIndex = 0;
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', theme.title);
      item.innerHTML = `
        <img class="carousel-img lazy" data-src="${theme.previews[0] || theme.thumb}" alt="${theme.title} 主题大图" />
        <div class="carousel-caption">
          <div class="carousel-title">${theme.title}</div>
          <div class="carousel-desc">${theme.desc}</div>
        </div>
      `;
      item.onclick = () => openModalCarousel(idx);
      item.onkeydown = e => {
        if (e.key === 'Enter' || e.key === ' ') openModalCarousel(idx);
      };
      carouselTrack.appendChild(item);
  
      // 懒加载轮播图片
      const img = item.querySelector('img.lazy');
      if (img) imageObserver.observe(img);
  
      // 指示点
      const dot = document.createElement('span');
      dot.className = 'carousel-dot' + (idx === 0 ? ' active' : '');
      dot.onclick = () => { setCarousel(idx); };
      carouselIndicators.appendChild(dot);
    });
  }
  renderCarousel();
  
  // ================== 卡片渲染 ==================
  function renderGrid(themes = cardThemes) {
    const grid = document.getElementById('themeGrid');
    grid.innerHTML = '';
    themes.forEach((theme, idx) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="thumb-wrap">
          <img class="thumb lazy" data-src="${theme.thumb}" alt="${theme.title} 预览" />
        </div>
        <div class="title">${theme.title}</div>
        <div class="desc">${theme.desc}</div>
        <div class="author-info-card" tabindex="0" aria-label="作者 ${theme.author.name}">
          <img class="author-avatar-card lazy" data-src="${theme.author.avatar}" alt="作者头像" />
          <span>${theme.author.name}</span>
        </div>
      `;
      card.addEventListener('click', () => openModalCard(idx));
      card.querySelector('.author-info-card').addEventListener('click', e => {
        e.stopPropagation();
        openModalCard(idx);
      });
      card.querySelector('.author-info-card').addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModalCard(idx);
        }
      });
      grid.appendChild(card);
  
      // 懒加载卡片图片和头像
      card.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
    });
  }
  renderGrid();
  
  // ================== 弹窗渲染 ==================
  function openModalCarousel(idx) {
    openModalCommon(carouselThemes[idx]);
  }
  function openModalCard(idx) {
    openModalCommon(cardThemes[idx]);
  }
  function openModalCommon(theme) {
    const modal = document.getElementById('modal');
    const backdrop = document.getElementById('modal-backdrop');
    const authorDiv = document.getElementById('modal-author');
    authorDiv.innerHTML = `
      <img class="author-avatar-card lazy" data-src="${theme.author.avatar}" alt="${theme.author.name}">
      <span class="author-name">${theme.author.name}</span>
    `;
    document.getElementById('modal-title').textContent = theme.title;
    document.getElementById('modal-desc').textContent = theme.desc;
    const tagDiv = document.getElementById('modal-tags');
    tagDiv.innerHTML = '';
    if (theme.tags && theme.tags.length) {
      theme.tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'tag-glass';
        tagEl.textContent = tag;
        tagDiv.appendChild(tagEl);
      });
    }
    // 预览图
    const modalImgs = document.getElementById('modal-imgs');
    modalImgs.innerHTML = '';
    theme.previews.forEach(src => {
      const wrap = document.createElement('div');
      wrap.className = 'img-wrap';
      const img = document.createElement('img');
      img.className = 'lazy';
      img.dataset.src = src;
      img.alt = '主题预览图';
      wrap.appendChild(img);
      modalImgs.appendChild(wrap);
      imageObserver.observe(img);
    });
    // 下载
    const dlContainer = document.getElementById('modal-downloads');
    dlContainer.innerHTML = '';
    theme.downloads.forEach(dl => {
      const span = document.createElement('span');
      span.className = 'tag-glass download-link';
      span.textContent = dl.name;
      span.onclick = () => window.open(dl.url, '_blank');
      dlContainer.appendChild(span);
    });
  
    modal.style.visibility = 'visible';
    backdrop.classList.add('show');
    setTimeout(() => {
      modal.classList.add('show');
    }, 10);
    modal.focus();
  
    // 懒加载作者头像
    authorDiv.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
  }
  
  // 关闭弹窗
  function closeModal() {
    const modal = document.getElementById('modal');
    const backdrop = document.getElementById('modal-backdrop');
    modal.classList.remove('show');
    backdrop.classList.remove('show');
    setTimeout(() => {
      modal.style.visibility = 'hidden';
    }, 500);
  }
  document.getElementById('modal-backdrop').onclick = closeModal;
  
  // ================== 预览大图懒加载 ==================
  let bigImgs = [];
  let bigImgIdx = 0;
  function showBigImg(src, arr) {
    bigImgs = arr || [src];
    bigImgIdx = bigImgs.indexOf(src);
    if (bigImgIdx === -1) bigImgIdx = 0;
    const bigImg = document.getElementById('bigImg');
    bigImg.dataset.src = bigImgs[bigImgIdx];
    bigImg.classList.add('lazy');
    imageObserver.observe(bigImg);
    document.getElementById('imgModal').classList.add('show');
  }
  function hideBigImg() {
    document.getElementById('imgModal').classList.remove('show');
  }
  function showPrevImg(e) {
    e && e.stopPropagation();
    if (bigImgIdx > 0) {
      bigImgIdx--;
      const bigImg = document.getElementById('bigImg');
      bigImg.dataset.src = bigImgs[bigImgIdx];
      bigImg.classList.add('lazy');
      imageObserver.observe(bigImg);
    }
  }
  function showNextImg(e) {
    e && e.stopPropagation();
    if (bigImgIdx < bigImgs.length - 1) {
      bigImgIdx++;
      const bigImg = document.getElementById('bigImg');
      bigImg.dataset.src = bigImgs[bigImgIdx];
      bigImg.classList.add('lazy');
      imageObserver.observe(bigImg);
    }
  }
  document.getElementById('bigImg').onclick = function(e) {
    e.stopPropagation();
  };
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
      hideBigImg();
    }
  });
  
  // ================== 搜索功能 ==================
  function toggleSearch() {
    const bar = document.getElementById('searchBar');
    if (bar.style.display === 'none' || bar.style.display === '') {
      bar.style.display = 'flex';
      document.getElementById('searchInput').focus();
    } else {
      bar.style.display = 'none';
      document.getElementById('searchInput').value = '';
      renderGrid(cardThemes); // 恢复全部
    }
  }
  function onLeftButtonClick() {
    alert('你可以自定义左上角按钮功能，比如跳转、切换模式等');
  }
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', handleSearch);
  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = cardThemes.filter(theme =>
      theme.title.toLowerCase().includes(query) ||
      theme.desc.toLowerCase().includes(query) ||
      (theme.tags && theme.tags.some(tag => tag.toLowerCase().includes(query))) ||
      (theme.author && theme.author.name.toLowerCase().includes(query))
    );
    renderGrid(filtered);
  }
  
  // ================== 轮播切换功能（可选实现） ==================
  function setCarousel(idx) {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');
    items.forEach((item, i) => item.classList.toggle('active', i === idx));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
  }
  