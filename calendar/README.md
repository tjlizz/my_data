|  字段   | 描述  |
|  ----  | ----  |
| date  | 阳历日期 |
| status  | 当天状态标识，1:节假日，2:工作日，null：周末或工作日(可根据week进行判断，也可以直接根据statusDesc进行判断) |
| statusDesc  | 状态描述，节假日/工作日/周末。1.当status为1时，表示节假日；2.当status为2时，表示工作日；3.当status为null时，如果week为周六或者周日，表示周末，否则表示工作日 |
| week  | 表示星期几 |
| animal  | 属相 |
| avoid  | 忌) |
| cnDay  | 星期几) |
| day  | 阳历日) |
| desc  | 节日描述，如：母亲节 |
| gzDate  | 干支纪日，如：丁巳) |
| gzMonth  | 干支纪月，如：癸巳 |
| gzYear  | 干支纪年，如：辛丑|
| isBigMonth  | 是否大月 |
| lDate  | 农历日，如：廿八|
| lMonth  | 农历月，如：三 |
| lunarDate  | 农历日，如：28 |
| lunarMonth  | 农历月，如：3 |
| lunarYear  | 农历年，如：2021 |
| month  | 阳历月 |
| oDate  | 保留字段，可忽略 |
| suit  | 宜 |
| term  | 节气 |
| type  | 保留字段，可忽略 |
| value  | 节日 |
| year  | 阳历年 |