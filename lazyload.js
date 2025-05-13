    // Fisher-Yates 随机算法
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
  
      // 轮播区专属主题
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
      }
      ];
  
      // 小卡片区全部主题
      const allCardThemes = [
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
          tags: ['华为', '预置', '一镜到底'],
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
  
      // 选定特权主题（这里选前3个，也可按实际需要指定）
      const privilegeThemes = allCardThemes.slice(0, 3);
      const normalThemes = allCardThemes.slice(3);
      shuffle(normalThemes);
      const cardThemes = privilegeThemes.concat(normalThemes);
  
      // 轮播大图
      const carouselTrack = document.getElementById('carouselTrack');
      const carouselIndicators = document.getElementById('carouselIndicators');
      let carouselIndex = 0;
      let carouselTimer = null;
      let carouselPaused = false;
  
      function renderCarousel() {
        carouselTrack.innerHTML = '';
        carouselIndicators.innerHTML = '';
        carouselThemes.forEach((theme, idx) => {
          const item = document.createElement('div');
          item.className = 'carousel-item' + (idx === carouselIndex ? ' active' : '');
          item.tabIndex = 0;
          item.setAttribute('role', 'button');
          item.setAttribute('aria-label', theme.title);
          item.innerHTML = `
            <img class="carousel-img" src="${theme.previews[0] || theme.thumb}" alt="${theme.title} 主题大图" />
            <div class="carousel-caption">
              <div class="carousel-title">
                <span class="marquee-outer">
                  <span class="marquee-inner">${theme.title}</span>
                </span>
              </div>
              <div class="carousel-desc">${theme.desc}</div>
            </div>
          `;
          item.onclick = () => openModalCarousel(idx);
          item.onkeydown = e => {
            if (e.key === 'Enter' || e.key === ' ') openModalCarousel(idx);
          };
          carouselTrack.appendChild(item);
  
          // 指示点
          const dot = document.createElement('span');
          dot.className = 'carousel-dot' + (idx === carouselIndex ? ' active' : '');
          dot.onclick = () => { setCarousel(idx); };
          carouselIndicators.appendChild(dot);
        });
  
        // 动画：滑动方向
        document.querySelectorAll('.carousel-item').forEach((el, idx) => {
          el.classList.remove('slide-in-left', 'slide-in-right');
          if (idx === carouselIndex) {
            if (typeof renderCarousel.lastIndex === 'number') {
              if (carouselIndex > renderCarousel.lastIndex || (carouselIndex === 0 && renderCarousel.lastIndex === carouselThemes.length - 1)) {
                el.classList.add('slide-in-right');
              } else if (carouselIndex < renderCarousel.lastIndex || (carouselIndex === carouselThemes.length - 1 && renderCarousel.lastIndex === 0)) {
                el.classList.add('slide-in-left');
              }
            }
          }
        });
        renderCarousel.lastIndex = carouselIndex;
  
        // 主题名轮播
        updateMarquee();
      }
      function setCarousel(idx) {
        carouselIndex = idx;
        renderCarousel();
        resetCarouselTimer();
      }
      function nextCarousel() {
        carouselIndex = (carouselIndex + 1) % carouselThemes.length;
        renderCarousel();
        resetCarouselTimer();
      }
      function resetCarouselTimer() {
        if (carouselTimer) clearInterval(carouselTimer);
        if (!carouselPaused) {
          carouselTimer = setInterval(() => {
            nextCarousel();
          }, 5000);
        }
      }
      function pauseCarousel() {
        carouselPaused = true;
        if (carouselTimer) clearInterval(carouselTimer);
      }
      function resumeCarousel() {
        carouselPaused = false;
        resetCarouselTimer();
      }
      document.getElementById('carousel').onmouseenter = pauseCarousel;
      document.getElementById('carousel').onmouseleave = resumeCarousel;
      document.getElementById('carousel').ontouchstart = pauseCarousel;
      document.getElementById('carousel').ontouchend = resumeCarousel;
      renderCarousel();
      resetCarouselTimer();
  
      // 主页小卡片
      const grid = document.getElementById('themeGrid');
      cardThemes.forEach((theme, idx) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <div class="thumb-wrap">
            <img class="thumb" src="${theme.thumb}" alt="${theme.title} 预览" loading="lazy"/>
          </div>
          <div class="title">
            <span class="marquee-outer">
              <span class="marquee-inner">${theme.title}</span>
            </span>
          </div>
          <div class="desc">${theme.desc}</div>
          <div class="author-info-card" tabindex="0" aria-label="作者 ${theme.author.name}">
            <img class="author-avatar-card" src="${theme.author.avatar}" alt="作者头像" />
            <span class="marquee-outer">
              <span class="marquee-inner">${theme.author.name}</span>
            </span>
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
      });
  
      // 通用marquee检测
      function updateMarquee() {
        document.querySelectorAll('.marquee-outer').forEach(outer => {
          const inner = outer.querySelector('.marquee-inner');
          if (!inner) return;
          inner.classList.remove('marquee');
          inner.style.removeProperty('--scroll-distance');
          if (inner.scrollWidth > outer.offsetWidth) {
            const distance = inner.scrollWidth - outer.offsetWidth;
            inner.style.setProperty('--scroll-distance', distance + 'px');
            inner.classList.add('marquee');
          }
        });
      }
      window.addEventListener('load', updateMarquee);
      window.addEventListener('resize', updateMarquee);
  
      // 横向分页相关
      let currentPage = 0;
      let currentImgs = [];
      const PC_PAGE_SIZE = 4;
      function renderImgs(imgs) {
        const isMobile = window.innerWidth <= 700;
        const container = document.getElementById('modal-imgs');
        container.innerHTML = '';
        if (isMobile) {
          imgs.forEach(src => {
            const wrap = document.createElement('div');
            wrap.className = 'img-wrap';
            const img = document.createElement('img');
            img.src = src;
            img.alt = '主题预览图';
            img.onclick = e => {
              e.stopPropagation();
              showBigImg(src, imgs);
            };
            wrap.appendChild(img);
            container.appendChild(wrap);
          });
          document.getElementById('slideLeftBtn').style.display = 'none';
          document.getElementById('slideRightBtn').style.display = 'none';
        } else {
          const totalPages = Math.ceil(imgs.length / PC_PAGE_SIZE) || 1;
          currentPage = Math.max(0, Math.min(currentPage, totalPages - 1));
          const start = currentPage * PC_PAGE_SIZE;
          const end = Math.min(start + PC_PAGE_SIZE, imgs.length);
          const pageImgs = imgs.slice(start, end);
          for (let i = 0; i < PC_PAGE_SIZE; i++) {
            const wrap = document.createElement('div');
            wrap.className = 'img-wrap' + (pageImgs[i] ? '' : ' placeholder');
            if (pageImgs[i]) {
              const img = document.createElement('img');
              img.src = pageImgs[i];
              img.alt = '主题预览图';
              img.onclick = e => {
                e.stopPropagation();
                showBigImg(pageImgs[i], imgs);
              };
              wrap.appendChild(img);
            }
            container.appendChild(wrap);
          }
          const leftBtn = document.getElementById('slideLeftBtn');
          const rightBtn = document.getElementById('slideRightBtn');
          if (totalPages > 1) {
            leftBtn.style.display = 'flex';
            rightBtn.style.display = 'flex';
            leftBtn.disabled = currentPage === 0;
            rightBtn.disabled = currentPage === totalPages - 1;
          } else {
            leftBtn.style.display = 'none';
            rightBtn.style.display = 'none';
          }
        }
      }
      function slideImgs(dir) {
        const imgs = currentImgs;
        const totalPages = Math.ceil(imgs.length / PC_PAGE_SIZE) || 1;
        currentPage += dir;
        currentPage = Math.max(0, Math.min(currentPage, totalPages - 1));
        renderImgs(imgs);
      }
      window.addEventListener('resize', () => {
        if (currentImgs.length) renderImgs(currentImgs);
      });
  
      // 弹窗：轮播主题
      function openModalCarousel(idx) {
        const theme = carouselThemes[idx];
        openModalCommon(theme);
      }
      // 弹窗：卡片主题
      function openModalCard(idx) {
        const theme = cardThemes[idx];
        openModalCommon(theme);
      }
      // 通用弹窗
      function openModalCommon(theme) {
        const modal = document.getElementById('modal');
        const backdrop = document.getElementById('modal-backdrop');
        const authorDiv = document.getElementById('modal-author');
        authorDiv.innerHTML = `
          <img class="author-avatar" src="${theme.author.avatar}" alt="${theme.author.name}">
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
        currentImgs = theme.previews;
        currentPage = 0;
        renderImgs(currentImgs);
  
        const dlContainer = document.getElementById('modal-downloads');
        dlContainer.innerHTML = '';
        theme.downloads.forEach(dl => {
          const span = document.createElement('span');
          span.className = 'tag-glass download-link';
          span.textContent = dl.name;
          span.onclick = () => window.open(dl.url, '_blank');
          dlContainer.appendChild(span);
        });
  
        if (window.innerWidth <= 700) {
          document.body.style.overflow = 'hidden';
        }
        modal.classList.remove('hide');
        modal.style.visibility = 'visible';
        backdrop.classList.add('show');
        setTimeout(() => {
          modal.classList.add('show');
        }, 10);
        modal.focus();
      }
  
      function closeModal() {
        const modal = document.getElementById('modal');
        const backdrop = document.getElementById('modal-backdrop');
        modal.classList.remove('show');
        modal.classList.add('hide');
        backdrop.classList.remove('show');
        document.body.style.overflow = '';
        setTimeout(() => {
          modal.classList.remove('hide');
          modal.style.visibility = 'hidden';
        }, 500);
      }
      document.getElementById('modal-backdrop').onclick = closeModal;
  
      // 预览大图弹窗相关
      let bigImgs = [];
      let bigImgIdx = 0;
      function showBigImg(src, arr) {
        bigImgs = arr || [src];
        bigImgIdx = bigImgs.indexOf(src);
        if (bigImgIdx === -1) bigImgIdx = 0;
        updateBigImgBtns();
        document.getElementById('bigImg').src = bigImgs[bigImgIdx];
        document.getElementById('imgModal').classList.add('show');
        if (window.innerWidth <= 700) {
          document.body.style.overflow = 'hidden';
        }
      }
      function hideBigImg() {
        document.getElementById('imgModal').classList.remove('show');
        document.body.style.overflow = '';
      }
      function showPrevImg(e) {
        e && e.stopPropagation();
        if (bigImgIdx > 0) {
          bigImgIdx--;
          document.getElementById('bigImg').src = bigImgs[bigImgIdx];
          updateBigImgBtns();
        }
      }
      function showNextImg(e) {
        e && e.stopPropagation();
        if (bigImgIdx < bigImgs.length - 1) {
          bigImgIdx++;
          document.getElementById('bigImg').src = bigImgs[bigImgIdx];
          updateBigImgBtns();
        }
      }
      function updateBigImgBtns() {
        document.getElementById('imgPrevBtn').disabled = bigImgIdx <= 0;
        document.getElementById('imgNextBtn').disabled = bigImgIdx >= bigImgs.length - 1;
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
  
      function toggleSearch() {
        const bar = document.getElementById('searchBar');
        if (bar.style.display === 'none' || bar.style.display === '') {
          bar.classList.add('animated-show');
          bar.style.display = 'flex';
          document.getElementById('searchInput').focus();
        } else {
          bar.classList.remove('animated-show');
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
        const filtered = cardThemes.filter(theme => {
          const titleMatch = theme.title.toLowerCase().includes(query);
          const authorMatch = theme.author.name.toLowerCase().includes(query);
          const tagMatch = theme.tags && theme.tags.some(tag => tag.toLowerCase().includes(query));
          return titleMatch || authorMatch || tagMatch;
        });
      
        renderGrid(filtered);
      }
      
      // 提取出来你的卡片渲染函数，原本是写在循环里的，改成通用函数：
      function renderGrid(themes) {
        const grid = document.getElementById('themeGrid');
        grid.innerHTML = '';
        themes.forEach((theme, idx) => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <div class="thumb-wrap">
              <img class="thumb" src="${theme.thumb}" alt="${theme.title} 预览" loading="lazy"/>
            </div>
            <div class="title">
              <span class="marquee-outer">
                <span class="marquee-inner">${theme.title}</span>
              </span>
            </div>
            <div class="desc">${theme.desc}</div>
            <div class="author-info-card" tabindex="0" aria-label="作者 ${theme.author.name}">
              <img class="author-avatar-card" src="${theme.author.avatar}" alt="作者头像" />
              <span class="marquee-outer">
                <span class="marquee-inner">${theme.author.name}</span>
              </span>
            </div>
          `;
          card.addEventListener('click', () => openModalCard(cardThemes.indexOf(theme)));
          card.querySelector('.author-info-card').addEventListener('click', e => {
            e.stopPropagation();
            openModalCard(cardThemes.indexOf(theme));
          });
          card.querySelector('.author-info-card').addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openModalCard(cardThemes.indexOf(theme));
            }
          });
          grid.appendChild(card);
        });
      }
      function onLeftButtonClick() {
        document.getElementById('userPanel').classList.add('show');
        document.getElementById('userPanelBackdrop').classList.add('show');
        document.body.style.overflow = 'hidden';
      }
      function closeUserPanel() {
        document.getElementById('userPanel').classList.remove('show');
        document.getElementById('userPanelBackdrop').classList.remove('show');
        document.body.style.overflow = '';
      }

  const video = document.getElementById('bgVideo');
  let lastTime = 0;
  let checkCount = 0;
  const maxChecks = 5;
  let videoPaused = false;
  let effectsReduced = false;

  const intervalId = setInterval(() => {
    const currentTime = video.currentTime;
    const diff = currentTime - lastTime;

    // === 第一级：轻度卡顿，暂停视频 ===
    if (diff < 0.05 && !videoPaused) {
      console.warn("检测到轻度卡顿，暂停视频");
      video.pause();
      videoPaused = true;
    }

    // === 第二级：严重卡顿，移除模糊 + 弹出提示框 ===
    if (diff < 0.01 && !effectsReduced) {
      console.warn("检测到严重卡顿，移除模糊效果并增强不透明度");
      removeAllBlur();
      increaseOpacity();
      showPerformanceWarning();
      effectsReduced = true;
      clearInterval(intervalId); // 检测完成
    }

    lastTime = currentTime;
    checkCount++;
    if (checkCount >= maxChecks) {
      clearInterval(intervalId);
    }
  }, 3000);

  function removeAllBlur() {
    const all = document.querySelectorAll('*');
    all.forEach(el => {
      const style = getComputedStyle(el);
      if (style.filter.includes('blur') || style.backdropFilter.includes('blur')) {
        el.style.filter = 'none';
        el.style.backdropFilter = 'none';
      }
    });
  }

  function showPerformanceWarning() {
    const box = document.createElement('div');
    box.textContent = "检测到当前设备性能较低，已关闭部分视觉效果以提升流畅度。";
    box.style = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: rgba(0,0,0,0.75);
      color: white;
      padding: 12px 16px;
      border-radius: 10px;
      font-size: 14px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
      z-index: 9999;
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(box);

    // 5 秒后自动淡出
    setTimeout(() => {
      box.style.opacity = '0';
      setTimeout(() => box.remove(), 1000);
    }, 5000);
  }
