import React from "react"
import { HashLink as Link } from "react-router-hash-link"
import { useParams } from "react-router-dom"
import BigLink from "../components/BigLink"
import TimelineLink from "../components/TimelineLink"

export default function Notes() {
    const id = useParams().note

    const notes = {
        "election-51": (
            <>
                <h1 id="election-50">1950 Election</h1>
                <div id="maintext">
                    <p>The next General Election after the <Link to={"../labour-45-51#election-45"}>1945 election</Link> was in 1950. Despite the success of the Welfare State & the NHS, people were increasingly frustrated with the poor economy & lack of luxuries. This was reflected in the turnout of the election - 84% of the country voted, which is the highest ever under universal suffrage. While Labour did increase their voter turnout, they lost many seats & gained a slim majority of 5</p>
                    <br />
                    <h1 id="election-51" style={{paddingLeft: 0}}>1951 Election</h1>
                    <p>On the 25th of October 1951, Atlee called a snap election to try and increase their majority. They did gain over 500k votes than the year prior, and they still had more voters than the Conservatives. However, they lost many seats & lost to the Conservatives - who had gained a 17-seat majority.</p>
                    <br />
                    <h3 id="labour-weakness">Labour Weakness</h3>
                    <p>Labour had been in power since the 1945 election, and had to deal with most of the post-war recovery. This included crippling debt, rationing, and a major housing shortage. As a result, many people attributed 'austerity' & 'rationing' towards Labour, and wanted to return to a normal way of life with a strong economy & being able to afford the essentials without rationing.</p>
                    <br />
                    <p>Internally, Labour was incredibly divided - the party had been split into two. The more radical & left-leaning of the party wanted Britain to become more socialist by nationalising more & making more services free to use. However this wasn't popular with the electorate since they couldn't come up with a way to pay for it. They also got into arguments with the more center-leaning side of the party.</p>
                    <br />
                    <p>However, this wasn't the main reason why Labour lost - they beat the Conservatives with the number of votes & got the highest number of votes until 1992 & 2019.</p>
                    <br />
                    <h3 id="conservatives-strengths">Conservative's Strengths</h3>
                    <p>The Conservatives were shocked after their loss in 1945. As such, they were forced to restructure the party. This was led by Lord Woolton, who reformed party finances & local organisation, which allowed them to take advantage of Labour's weaknesses. They criticised Labour's nationalisation of steel & iron, and promised to build 300,000 new houses a year compared to Labour's 200,000. However, they knew that Labour's policies were popular, so the Conservatives committed to expanding the Welfare State & the end of rationing through offering more 'red meat' <i>(this was a popular item that was still rationed until 1954)</i>.</p>
                    <br />
                    <h3 id="electoral-system">Electoral System</h3>
                    <p>While Labour did increase their number of voters, this was typically in 'safe' areas which already had a majority of Labour voters - which meant that there wouldn't be an increase in the number of seats. In contrast, the Conservatives focused on flipping swing states, which gained them a lot of seats. Also, Labour reformed boundary changes for voting, which led to them requiring more votes for the same number of seats.</p>
                    <br />
                    <p>The collapse of the Liberal party helped contribute to this. Due to poor finances, they could only afford to contest 109 seats, which left many Liberal voters unable to support their party. As a result, many of these voters switched & voted for Conservatives.</p>
                </div>
            </>
        ),
        "conservatives-51-64": (
            <>
                <h1>Conservative Domination</h1>
                <div id="maintext">
                    <p>From 1951 to 1964, the Conservatives dominated the government due to a variety of factors. However, by 1964, public faith in the party had dropped drastically & a new Labour government was formed.</p>
                    <br />
                    <br />
                    <div className="dual">
                        <BigLink title={"Domination"} location={"../conservative-domination-51-64"} />
                        <BigLink title={"Leaders"} location={"../conservative-leaders-51-64"} />
                        <BigLink title={"Labour Weakness"} location={"../labour-weakness-51-64"} />
                        <BigLink title={"Decline"} location={"../conservative-decline-51-64"} />
                    </div>
                </div>
            </>
        ),
        "conservative-domination-51-64": (
            <>
                <h1>Conservative Domination</h1>
                <div id="maintext">
                    <p>There are a variety of factors that resulted in the Conservatives staying in power for 13 years:</p>
                    <br />
                    <h3 id="living-standards">Wages & Living Standards</h3>
                    <p>Living standards rose significantly in the 1950's as Britain recovered from WW2 & the Korean War. A combination of wages rising faster than prices & a decrease in income tax just before elections increased consumer purchasing power, which allowed people to spend more money & splash out on more luxurious things. For example, car ownership rose 500%, the number of people owning labour-reducing machines <i>(like fridges & washing machines)</i> rose significantly & the number of people owning TVs rose from 4% to 91%.</p>
                    <br />
                    <p><Link to="../conservative-leaders-51-64#macmillan">MacMillan</Link> famously said that <i>"most people never had it so good"</i> in 1957 & claimed that <i>"live is better under the Conservatives"</i>.</p>
                    <br />
                    <h3 id="credit">Credit</h3>
                    <p>The government made it easier for people to borrow money through credit. This allowed people to splash out more on things they wouldn't usually, like holidays.</p>
                    <br />
                    <h3 id="housing">Housing</h3>
                    <p>The Conservatives reached their <Link to="../election-51#election-51">election</Link> promise of 300,000 new houses a year by 1954 & overall built 1.7 million new houses. This, combined with the higher purchasing power, helped rapidly increase the number of people owning their own properties & decreased the waiting list for getting a home. They also removed controls & limits on rent, which allowed many more people to rent properties. However, this also helped raise rent for some.</p>
                    <br />
                    <h3 id="economy">Economic Policies</h3>
                    <p>At the time, both the Conservatives & Labour had similar economic policies - which was named Butskellism. They wanted higher funding for the welfare state, a strong industry & full employment. However, the Conservatives implemented stop-go economic policies - where the government would switch between stimulating & restricting the economy. This was an alternative to developing an economic strategy to have consistent growth. If spending & wages rose rapidly, taxes & interest rates would increase, and import controls would be introduced. If spending was reduced, then taxes & interest rates fell, and import controls would be relaxed. However, it failed for several reasons:</p>
                    <br />
                    <ul>
                        <li>Stagflation happened - where industrial output dropped but inflation stayed the same.</li>
                        <li>There was an increase in imports & exports were reduced due to British goods becoming too expensive to manufacture.</li>
                        <li>Policies based on stop-go were unstable & hindered growth as it prevented building a strong economic base.</li>
                        <li>The government failed to invest in key industries - like textiles & shipbuilding - and failed to invest in industrial research & development, which hindered growth.</li>
                        <li>Despite MacMillan's claims, unemployment still steadily rose:</li>
                        <ul>
                            <li>370k unemployed in 1951,</li>
                            <li>300k unemployed in 1956,</li>
                            <li>880k unemployed in 1963.</li>
                        </ul>
                    </ul>
                    <br />
                    <h3 id="social-policy">Social Policies</h3>
                    <p>After WW2, there was a massive societal shift. People of different classes fought alongside each other during the war & women worked traditionally 'male' jobs. The blur of class distinctions was helped by the welfare state - since people were better off, more people owned houses & the gap between the working and middle classes shrunk.</p>
                    <br />
                    <p>The Conservatives replaced the old three-tier education system with the comprehensive system. The old system featured an '11 Plus' exam to determine what type of school a child should go to: a grammar school for those more academically-inclined, a secondary-technical for those more technically-minded, and a secondary-modern for people who didn't fit in either. This was replaced by a new system, which abolished the '11 Plus' & made people attend schools in their local catchment area. This would increase competitiveness between local schools & boost their quality of education, as well as allowing everyone an equal access to knowledge & education.</p>
                </div>
            </>
        ),
        "conservative-leaders-51-64": (
            <>
                <h1>Conservative Leaders</h1>
                <div id="maintext">
                    <h2 id="churchill">Churchill</h2>
                    <p>By 1951, Churchill was an old man. He was just a figurehead for the government, and his vote was more of a 'thank you' for WW2. As a result, his Chancellor R. A. Butler ran the country for him. He had been responsible for reforming the Conservatives after the failure of the <Link to={"../labour-45-51#election-45"}>1945 election</Link>, which led to the success in <Link to={"../election-51#election-51"}>1951 election</Link>.</p>
                    <br />
                    <h2 id="eden">Eden</h2>
                    <p>Churchill resigned in 1955 & was replaced by Antony Eden. To help strengthen the Conservatives, he called an election immediately after taking office, which increased the Conservative majority. This was due to his personal appeal - he attracted many women voters due to him being attractive & well-dressed.</p>
                    <br />
                    <h3 id="suez">Suez Crisis</h3>
                    <p>On the 26th of July 1956, Nasser <i>(president of Egypt)</i> suddenly announced that the Suez canal would be nationalised & owned by Egypt. This made Britain & France furious as previously they had owned the canal. Therefore, secret meetings between the two nations were held & they devised a plan - Israel was to invade Egypt, and Britain & France were to act as peacemakers to try and restore their control of the Suez region. The plan was a military success. However, there were many public protests against the war, and there were mass military desertions. Also, both the US & USSR joined forces at the UN & called for an end of the invasion. Britain were forced to retreat; they had also lost access to oil in the region & US aid. As a result, Eden resigned.</p>
                    <br />
                    <h2 id="macmillan">MacMillan</h2>
                    <p>Harold MacMillan replaced Eden's short reign. Initially, he was successful - the high <Link to="../conservative-domination-51-64#economy">living standards</Link> continued & people lived comfortably. As a result, the Conservatives increased their majority again in the 1959 election. To appear more progressive, they also supported a change in values like the abolishment of the death penalty & dismantle of the <Link to="../empire">Empire</Link>.</p>
                    <br />
                    <p>By the turn of the 1960's, the economic issues of <Link to="../conservative-domination-51-64#economy">stop-go economics</Link> started to appear, which contributed to their eventual <Link to="../conservative-decline-51-64#economic-issues">decline</Link>. To try and fix this, MacMillan reshuffled his cabinet in what was known as the 'Night of the Long Knives' in July 1962. 7 out of the 20 members of the cabinet were replaced, due to MacMillan being scared by Labour & Liberal successes in by-elections & opinion polls. However, this tanked his popularity, as people saw it as stabbing his friends & colleagues in the back. He also tried to join the successful EEC, but this <Link to="../conservative-decline-51-64#eec-rejection">failed</Link>. Several <Link to="../conservative-decline-51-64#scandals">scandals</Link> started to surface too, which made the public very critical of the government & MacMillan. Due to his declining popularity, he resigned in 1963.</p>
                    <br />
                    <h2 id="douglas-home">Douglas-Home</h2>
                    <p>Alec Douglas-Home was popular within the Conservatives & was backed by MacMillan. As a result, the party elected him as leader & he became Prime Minister. However, this method of only allowing the inner Conservative party members to vote in the new Prime Minister was controversial to the public, and showed that they were out of touch. This was reflected in the <Link to="../election-64">1964 election</Link>, where they lost to the <Link to={"../election-64#wilson-leadership"}>reformed Labour party under Harold Wilson.</Link></p>
                </div>
            </>
        ),
        "conservative-decline-51-64": (
            <>
                <h1>Conservative Decline</h1>
                <div id="maintext">
                    <p>During the Conservative's 13 years in power, their public support massively declined.</p>
                    <br />
                    <h2 id="economic-issues">Economic Issues</h2>
                    <p>By the 1960's, the issues with <Link to={"../conservative-domination#economy"}>stop-go economics</Link> were starting to show. The main issue was a large balance of payments deficit - where Britain was importing more than they were exporting. This was due to several factors:</p>
                    <br />
                    <ul>
                        <li>Due to the lack of investment in British industries, British goods were expensive to manufacture & often very poor quality. As a result, they were unpopular to export & Britons preferred better-quality foreign goods.</li>
                        <li>People missed out on buying luxuries during WW2 & post-war rationing. Once it ended, and people started earning more, there was a massive influx in luxury items being bought. Most of these were foreign-made.</li>
                    </ul>
                    <br />
                    <p>Any attempts to fix this was ineffective. They tried to pause pay in the public sector, but this didn't slow the amount of imports. A National Economic Development Council <i>(NEDC)</i> was set up, which included representatives from the government, trade unions & industrial managers. They failed to come up with a successful strategy to deal with the deficit. A National Incomes Committee <i>(NIC)</i> was set up to try and control incomes, which would help deal with the number of imports & inflation. However, this didn't work.</p>
                    <br />
                    <p>Unemployment also skyrocketed, despite <Link to={"../conservative-leaders-51-64#macmillan"}>MacMillan's</Link> claims - there were 800,000 unemployed people by the end of 1963, with the North & Scotland being badly affected. Those that did work also were on strike, most notably in the docks. This badly affected the economy as they controlled imports & exports, and this is severely limited when a strike is happening.</p>
                    <br />
                    <h3 id="eec-rejection">EEC Rejection</h3>
                    <p>Several European nations had set up a European Economic Committee <i>(EEC)</i> to establish a common trade area & helped promote friendly relations. Compared to Britain, the EEC countries were doing much better economically. Britain also was no longer a world power - this was evident through the <Link to={"../conservative-leaders-51-64#suez"}>Suez Crisis</Link> & the collapse of the Empire. However, <Link to={"../churchill-de-gaulle"}>De Gaulle</Link> vetoed the the application, stating that Britain focused too much on the Commonwealth countries <i>(like New Zealand, Australia & Canada)</i> and America, rather than European interests.</p>
                    <br />
                    <h2 id="scandals">Scandals</h2>
                    <p>There were several scandals that weakened MacMillan's support, and helped contribute to their decline.</p>
                    <br />
                    <h3 id="vassal">Vassal Affair</h3>
                    <p>John Vassal was a civil servant in the Admiralty who spied for the Soviet Union. Rumours suggested that he was protected by senior members, however there was no evidence. This created public distrust towards the civil servants & Admiralty, and showed that there were spies within the government.</p>
                    <br />
                    <h3 id="philby">Philby Case</h3>
                    <p>Kim Philby was a senior official at the Foreign Office, and had been passing information to the Soviet Union & recruiting spies for them. He had successfully fled to Russia in 1963. This showed that the Secret Service weren't doing their jobs properly, especially since more spies were recruited & he got away safely.</p>
                    <br />
                    <h3 id="argyll">Argyll Divorce</h3>
                    <p>In 1963, the Duke of Argyll sued his (ex)-wife for adultery. She allegedly slept with 88 people, and had engaged in group sex. Some of these people were rumoured to be government ministers, as well as important British & American figures. This created distrust towards MPs, as they engaged in acts that the public disliked in their private lives.</p>
                    <br />
                    <h2 id="social-issues">Social Issues</h2>
                    <p>After WW2, class barriers began to break down and the Conservatives had helped this through their <Link to="../conservative-domination-51-64#social-policy">education reforms</Link>. However, WW2 resulted in many working-class men dying in the battlefields, so the <Link to="../labour-45-51">post-war Labour government</Link> introduced the British Nationality Act in 1948. This allowed any citizen of a Commonwealth country to hold a British passport & come work in the UK. This caused a mass influx of immigrants from all over the old British Empire, especially after the violent partition of India & the Cyprus civil war.</p>
                    <br />
                    <h3 id="race-riots">Race Riots</h3>
                    <p>However, many Britons disliked this influx of immigrants and struggled to adapt to a multiracial society. Immigrants were blamed for housing shortages, simply because they were occupying houses where rent was cheap. They were also blamed for the job shortages, since they often accepted jobs with lower pay than average. Tensions spilled in 1958-59 & riots emerged in many parts of the countries including London, Bristol & Nottingham. Notting Hill was a notable example - youths attacked properties owned by black people. Police struggled to contain these riots, but gave out harsh sentences to those that were caught.</p>
                    <br />
                    <p>The government tried to help by launching the Salmon Inquiry. This deduced that the riots were due to an increase in immigration, and failed to mention the discrimination immigrants faced when looking for housing or employment. The government also introduced the 1962 Commonwealth Immigration Act, which introduced quota immigration limits from each Commonwealth country. However, this created a rush of immigrants that wanted to avoid the restrictions, which made the situation worse.</p>
                    <br />
                    <h3 id="youth-riots">Youth Riots</h3>
                    <p>During the 1950's & 1960's, a youth culture formed that had interests & beliefs that opposed their elders, and often caused violence between the different sub-cultures. One reason for all this was due to a rise in <Link to={"../conservative-domination-51-64#living-standards"}>affluence</Link>, since the youth could afford new things like transistor radios - however, not everyone could and this resulted in an increase in antisocial behaviour. Another reason was due to the fact that they never grew up with the horrors of war, so they didn't feel attracted to strict hierarchical structures and authority. The various scandals of the Conservatives helped add to this, as well as the link between the Conservatives & traditional values. This culminated with the release of several satirical political pieces like 'Private Eye' & 'That Was The Week That Was', and the rise of new entertainment like Rock 'n Roll music.</p>
                </div>
            </>
        ),
        "labour-weakness-51-64": (
            <>
                <h1>Labour's Weaknesses</h1>
                <div id="maintext">
                    <p>During the 1950's, Labour became a very weak party, for a variety of factors:</p>
                    <br />
                    <h3 id="leadership">Leadership & Political Stance</h3>
                    <p>A divide formed in the Labour party after they lost the <Link to="../election-51#election-51">1951 election</Link>. There were those on the left of the party like Aneurin Bevan, who were known as the fundamentalists. They thought that the Welfare State was the first step towards a fully Socialist Britain, that union leaders should have a say in parliamentary policies, and wanted to nationalise more services through Clause IV <i>(the Labour policy that focuses on nationalising key services)</i>.</p>
                    <br />
                    <p>There were also those on the right of the party like Hugh Gaitskell, who were known as the revisionists. They wanted to modernise the Labour party & wanted to focus more on social equality than economic change, abolish Clause IV, and wanted people in parliament make policies rather than union leaders. This divide was widened when Gaitskell became the Labour party leader after Attlee retired in 1955.</p>
                    <br />
                    <h3 id="nuclear">Nuclear Policy</h3>
                    <p>There was also a divide on nuclear bombs. The revisionists wanted to maintain Britain's nuclear deterrence & for West Germany to enter NATO. However, the fundamentalists wanted nuclear disarmament instead. They argued that the money was better spent on welfare programs & they didn't want the Soviet Union to fall behind in the arms race. They also didn't want West Germany to join NATO as they feared that it would isolate & scare away the Soviet Union.</p>
                    <br />
                    <h3 id="economic-manipulation">Economic Manipulation</h3>
                    <p>The 1959 election was won by <Link to="../conservative-leaders-51-63#macmillan">MacMillan</Link> however Gaitskell had a chance to win. The <Link to="../conservative-leaders-51-63#suez">Suez crisis</Link> was still in the minds of the voters, and people were starting to become aware of the economic manipulation by the Conservatives through their pre-election budgets. They would release 'give-away' budgets in the run-up to the election, which would lower taxes & promote economic recovery; this would increase their voters & give power to MacMillan's claim that "Life is better under the Conservatives". Post-election, they would send out a more controversial budget, which would increase taxes & recoup their lost cash in the 'give-away' budget.</p>
                    <br />
                    <p>However, a 'give-away' budget helped win the election & was still enough to sway voters. Also, Labour's budget ideas were unrealistic - they wanted to increase old-age pensions without an increase in tax. People started asking how they would fund it, to which Labour gave unconvincing arguments & solutions. They were also against joining the EEC <i>(something which the Conservatives were <Link to="../conservative-decline-51-64#eec-rejection">trying to do</Link> & was popular with the voters)</i>, which damaged their 'modern & progressive' reputation.</p>
                </div>
            </>
        ),
        "election-64": (
            <>
                <h1>1964 Election</h1>
                <div id="maintext">
                    <p>An election was called in 1964, which led to the victory of Labour & the end of the <Link to="../conservatives-51-64">13 years of Conservative domination</Link>. However, what was apparent that this was due to a rejection of the Conservatives, rather than an endorsement of Labour.</p>
                    <br />
                    <h3 id="wilson-leadership">Harold Wilson's Leadership</h3>
                    <p>After Gaitskell died in 1963, Harold Wilson was elected leader. He managed to gloss over any <Link to="../labour-weakness-51-64">internal divisions</Link> & portrayed Labour as 'modern, progressive & dynamic'. This was also alongside a new election manifesto that offered full employment, economic growth, and increased welfare, healthcare and housing. He was also seen as a classless professional due to his more humble background - a man of the people to lead a new scientific & advanced Britain. However, this was not reflected in the polls - Labour received 10,000 less votes than the 1959 election.</p>
                    <br />
                    <h3 id="public-view-conservatives">Public Perception of the Conservatives</h3>
                    <p>The Conservatives were blamed for the <Link to="../conservative-decline-51-64#economic-issues">economic issues</Link> & failed to tackle rising unemployment, inflation, class gap & industrial worries. They were also out of touch due to the various <Link to="../conservative-decline-51-64#scandals">scandals</Link> & the <Link to="../conservative-leaders-51-64#douglas-home">Earl of Home</Link> being their leader - people saw them as old-fashioned, elite & self-righteous.</p>
                    <br />
                    <h3 id="liberal-revival">Liberal Revival</h3>
                    <p>Many people disliked the Conservatives, but couldn't bring themselves to vote Labour. Therefore, the Liberals gained twice as many votes compared to 1959, and increased their seats from 9 to 12. Most of these votes were stolen from the Conservatives, which allowed Labour to have the majority and win the election.</p>
                    <br />
                    <p>The gain in voters was also due to more publicity, funding & new people. This meant they could contest more seats than before, thus being an option for more people. Previously, they didn't have the money or support to contest many seats - however this had changed due to the decline of the Conservatives.</p>
                    <br />
                    <h3 id="change-in-society">Changes in 1950's Society</h3>
                    <p>A rise in living standards allowed people to have more money & be more independent, therefore being less likely to accept traditional values & opt for more progressive values instead. This often led to many <Link to="../conservative-decline-51-64#youth-riots">youth riots</Link>. Underprivileged youth also had better access to education, which led to a blur of the class divide. These youth also wanted a classless, scientific & technologically advanced society, which Labour promised them.</p>
                </div>
            </>
        ),
        "wilson-64-70": (
            <>
                <h1>Wilson's Limited Success</h1>
                <div id="maintext">
                    <p>While Labour did win the <Link to="../election-64">1964 election</Link>, Wilson gained a lot of issues:</p>
                    <br />
                    <ul>
                        <li>They only had a majority of 4, which is very difficult to work with.</li>
                        <li>During the election, they had set high expectations with modernising Britain.</li>
                        <li>There were a lot of foreign & colonial issues to deal with.</li>
                        <li>The Labour party was still somewhat <Link to="../labour-weakness-51-64">divided</Link>, with several talented & senior leaders disliking each other.</li>
                        <li>Wilson had inherited a very bad <Link to="../conservative-decline-51-64#economic-issues">economy</Link>, with issues he <Link to="../wilson-economy-64-70">needed to fix</Link>.</li>
                    </ul>
                    <br />
                    <p>However, Wilson believed & was a good leader. He came from a humble background, which people trusted, and had always been good & interested in politics. He was intelligent, hard-working & had good memory. He also sought compromise rather than conflict, and was open to both sides of the party.</p>
                    <br />
                    <h3 id="election-66">1966 Election</h3>
                    <p>A majority of 4 was unworkable, so Wilson called a snap election - he massively increased his majority to 96. People still blamed the Conservatives for the poor economy, and Wilson made their new leader, Edward Heath, look dogged & ponderous.</p>
                    <br />
                    <h2 id="transformation">Wilson's Transformations</h2>
                    <p>As part of their <Link to="../election-64#wilson-leadership">1964 election manifesto</Link>, Labour had promised voters that they would reform society 'in the white heat of technology'.</p>
                    <br />
                    <br />
                    <div className="dual">
                        <BigLink title={"Societal Reforms"} location={"../wilson-society-64-70"} />
                        <BigLink title={"Economic Management"} location={"../wilson-economy-64-70"} />
                    </div>
                </div>
            </>
        ),
        "wilson-society-64-70": (
            <>
                <h1>Wilson's Societal Reforms</h1>
                <div id="maintext">
                    <p>Wilson started his transformation through new reforms, which was a big part of his election campaign due to the <Link to="../election-64#change-in-society">changes in society</Link>. This was led by the progressive Home Secretary Roy Jenkins, who imposed many pieces of legislation which 'modernised society':</p>
                    <br />
                    <ul>
                        <li><strong>Nov 1965</strong>: the Murder act temporarily abolished the death penalty, which most people disliked <i>(it was fully outlawed in 1969)</i>.</li>
                        <li><strong>Nov 1965</strong>: the Race Relations act made discrimination in public facilities illegal, however it was still legal in private.</li>
                        <li><strong>June 1967</strong>: the Family Planning act made contraception accessible to all on the NHS, not just married couples. This led to a decline in both birth rates & unwanted pregnancies.</li>
                        <li><strong>July 1967</strong>: the Sexual Offences act made homosexual acts in private between consenting adults legal.</li>
                        <li><strong>Apr 1968</strong>: the Race Relations act made discrimination in housing and employment illegal.</li>
                        <li><strong>July 1968</strong>: the Theatres act ended the censorship of plays by the Lord Chamberlain.</li>
                        <li><strong>May 1968</strong>: the Voting act lowered the voting age from 21 to 18.</li>
                        <li><strong>Oct 1969</strong>: the Divorce act made the process simpler & cheaper, which allowed more people to escape abusive marriages.</li>
                        <li><strong>May 1970</strong>: the Equal Pay act made men and women receive the same pay for the same work.</li>
                    </ul>
                    <br />
                    <h3 id="race-relations">Race Relations</h3>
                    <p>During the 1960's & 70's, there was a lot of racial tension. Britain had a large stream of immigrants from more impoverished countries. These immigrants settled for low-paying jobs, which allowed employers to reduce wages for these jobs that were typically taken up by Labour's target demographic. People also believed that "white Britain was under siege" due to the large number of immigrants. This led to the famous racist "rivers of blood" speech by Enoch Powell on the 20th of April 1968, where he claimed that "immigration would be the end of Britain". This caused mass protest on both sides - with many supporting the speech & many hating it. This helped increase racial tension & made Wilson very paranoid.</p>
                    <br />
                    <h3 id="education-reform">Education Reform</h3>
                    <p>Many people disliked the current three-tier system, so the Minister for Education Anthony Crossland started replacing the old system with the new comprehensive system. He also helped expand Universities across Britain due to the Robbins report, which claimed that Britain needed a sufficiently educated population. Wilson also established the Open University, which allowed people to work on a degree part-time & at home. However these reforms were actually started during the <Link to="../conservative-domination-51-64#social-policy">Conservatives</Link>. <Link to="../conservative-leaders-51-64#douglas-home">Douglas-Home</Link> began to implement these during his short leadership.</p>
                    <br />
                    <h2 id="foreign-issues">Foreign Issues</h2>
                    <p>A lot of foreign & colonial issues arose under Wilson.</p>
                    <br />
                    <h3 id="vietnam">Vietnam War</h3>
                    <p>The UK relied heavily on the US for financial aid, especially after the <Link to="../labour-45-51#financial-crisis">post-war financial crisis</Link>. Those on the left of the Labour party thought that the US was aggressive and imperialist, and wanted Wilson to criticise their efforts in the Vietnam War. However, Wilson knew that this would damage their relationship with the US, so he showed public support for the war effort - however, he reused President Johnson's urges for Britain to send troops. He also criticised the heavy bombing of Vietnam in 1966, and tried to establish a peace deal in 1967. However, these efforts still annoyed the US, and the left weren't satisfied with Wilson's efforts.</p>
                    <br />
                    <h3 id="zimbabwe">Southern Rhodesia (Zimbabwe)</h3>
                    <p>After the war, the British Empire started a process of decolonisation, where many of it's colonies became independent and ruled by the majority of that country. In 1965, Ian Smith declared an independent Southern Rhodesia by the white-minority government, which would have prevented the government being ran by the black-majority through decolonisation.</p>
                    <br />
                    <p>The left wanted Wilson to send troops to crush the rebellion, however Wilson initially opted for economic sanctions. These failed, and instead he tried personal diplomacy - Smith was allowed to rule as long as majority rule was introduced. Smith's refusal of this made people believe that Wilson was against the rebellion, which helped public support of Wilson. The situation wasn't solved until the establishment of an independent Zimbabwe in 1980.</p>
                </div>
            </>
        ),
        "medieval-life": (
            <>
                <h1>Medieval Life</h1>
                <div id="maintext">
                    <p>Living conditions of Medieval people was very poor:</p>
                    <br />
                    <ul>
                        <li>They wore dirty, basic clothes.</li>
                        <li>Most people were uneducated.</li>
                        <li>People worked hard and often died young - average life expectancy was 30.</li>
                        <li>They had a basic diet and starvation was common during a bad harvest.</li>
                        <li>Women were seen as inferior to men & could be accused of being a witch.</li>
                        <li>Infant mortality rate was 50%, so women often had many children.</li>
                        <li>Most families lived in one room made from mud & thatch.</li>
                    </ul>
                    <br />
                    <h2 id="society">Society</h2>
                    <br />
                    <h3 id="feudal-system">Feudal System</h3>
                    <p>Medieval society had a strict social structure known as the Feudal System:</p>
                    <br />
                    <ul>
                        <li><strong>King</strong>: the King was the leader of the land.</li>
                        <li><strong>Lords</strong>: they were vassals to the king and owned the land. This includes bishops.</li>
                        <li><strong>Knights</strong>: they were vassals to the lords and provided military service. They were highly-trained soldiers from birth.</li>
                        <li><strong>Peasants</strong>: they worked the land and pay rent.</li>
                    </ul>
                    <br />
                    <h3 id="religion">Religion</h3>
                    <p>Religion was deeply-rooted in society. It was a way of comprehending & explaining things that people didn't understand due to a lack of science & restricted education. It was also used as a way of establishing control through a hierarchy - with those on top being 'chosen by God' and blaming certain people for society's problems. However it did unite people under one belief through Churches & masses, which boosted morale.</p>
                </div>
            </>
        ),
        "first": (
            <>
                <h1>The First Crusade</h1>
                <div id="maintext"> 
                    <TimelineLink title="Background" location="../first-background" date="1054 - 1095" />
                    <TimelineLink title="Calling of the Crusade" location="../first-calling" date="1095" />
                    <TimelineLink title="The People's Crusade" location="../first-peoples" date="" />
                    <TimelineLink title="The Prince's Crusade" location="../first-princes" date="1095 - 1099" />
                </div>
            </>
        ),
        "first-background": (
            <>
                <h1>Background to the Crusade</h1>
                <div id="maintext">
                    <h3 id="great-schism">The Great Schism</h3>
                    <p>In 1054, both the Western Catholic & Eastern Orthodox churches fell out and excommunicated each other over various small & big issues. The Catholics were controlled by the Pope in Rome, and the Orthodox had no leader since it saw all bishops as equal, although they were politically led by the Byzantine Emperor.</p>
                    <br />
                    <h3 id="investiture-contest">Investiture Contest</h3>
                    <p>Leading up to the First Crusade, tensions rose between the Papacy & the European Lords - more specifically the Holy Roman Emperor leader Henry IV. They disagreed on who should appoint bishops - with Henry wanting to appoint his friends, whereas the Pope wanted to appoint someone spiritual. This resulted in many Lords fighting against the Pope and him losing power of Rome. While Henry tried to install his antipope, Clement III, in the Pope's place, it was unsuccessful and Pope Gregory VII <i>(and later Urban II)</i> held on.</p>
                    <br />
                    <h3 id="knightly-violence">Knightly Violence</h3>
                    <p>To protect the Lords, highly-trained knights were trained from birth to become violent killing machines. This resulted in many minor conflicts resulting in violence, which caused an eventual breakdown in society. Due to the training, some of these knights also started killing innocent Christians, which created a Warrior Cult throughout Europe. One way of solving this was the 'Peace of God' movement, which made fighting forbidden on certain days & against certain places. However this movement ultimately failed.</p>
                    <br />
                    <h3 id="byzantium">Byzantine Empire</h3>
                    <p>After the fall of the Roman Empire, much of Asia Minor & Greece were occupied by the Byzantine Empire, which was led by Emperor Alexius by the time of the First Crusade. However, during the late 1000's, they faced a number of challenges:</p>
                    <br />
                    <ul>
                        <li>Pagan tribes were attacking the Empire from the north. Alexius' solution was to hire mercenaries, but this was expensive when he kept losing land & tax income.</li>
                        <li>The Normans were also invading through the Balkans. To counter this, he paid the Pope's enemy Henry IV to attack Rome, which would cause the Pope to call the Normans back to help defend.</li>
                        <li>Asia Minor was being invaded by the Seljuk Turks - who were skilled horsemen who were approaching the capital Constantinople while also claiming important land.</li>
                        <li>Due to the expensive mercenaries & high taxes, Alexius was weak & unpopular.</li>
                    </ul>
                    <br />
                    <p>To help resolve these issues, Alexius sent a request for help to the Catholic Pope in 1095. After the Great Schism & the desire to increase political power, the Pope accepted. This was the trigger for the First Crusade.</p>
                </div>
            </>
        ),
        "first-calling": (
            <>
                <h1>Calling of the Crusade</h1>
                <div id="maintext">
                    <p>On the 27th November 1095, Pope Urban II called the First Crusade at an open-air rally - asking people to 'take the cross' & take back the Holy Land from the infidel. This would be achieved through a Holy War, a concept created by Urban II & many scholars to make war less sinful. Urban took this a step further by making it an armed pilgrimage - where going on a Holy War to the Holy Land was an act of penance & was equivalent to a pilgrimage. This made it appealing to many as it was an easy way to relieve sins.</p>
                    <br />
                    <h2 id="why">Why People Went</h2>
                    <br />
                    <div className="dual">
                        <div>
                            <h3 id="religious">Religious</h3>
                            <p>The fear of hell alongside a violent culture led many Christians wanting forgiveness for their sins. Going on an armed pilgrimage to Jerusalem was the ultimate form of penance and could relieve all sin - which motivated many to 'take the cross'. Also, during his Council of Clermont speech, Urban II exaggerated the persecution of Christians in Jerusalem, which made Western Christians feel a personal obligation to help their Eastern brethren.</p>
                        </div>
                        <div>
                            <h3 id="jerusalem">Jerusalem</h3>
                            <p>Jerusalem was the most important destination for pilgrimage & the Catholics wanted to 'win it back' from the Muslims. Going on Crusade to Jerusalem would also count as a pilgrimage, which will relieve all sins from the Crusaders.</p>
                            <br />
                            <p>However, not every Crusader made it this far - many died on the way & many lords left to claim their own new land in the East. Many Crusaders also returned home once their 'pilgrimage' was finished.</p>
                        </div>
                        <div>
                            <h3 id="primogeniture">Primogeniture</h3>
                            <p>The land of the nobility was always inherited by the oldest son. However, due to low life expectancy, younger sons were also raised assuming they would own land. Those that grew up & didn't inherit land would want to gain it through other means - going on Crusade would be perfect for this since they could conquer & establish new kingdoms in the East in the name of 'Christianity'. Medieval lords also cared about their family name, so gaining new land in the East would improve this & increase their power.</p>
                        </div>
                        <div>
                            <h3 id="material-gain">Material Gain</h3>
                            <p>Soldiers would gain 'loot' through pillaging nearby cities & towns after a battle victory. The Pope also described Jerusalem as the 'land of milk & honey', which seemed appealing to famine-ridden Europe.</p>
                            <br />
                            <p>However, a lot of Lords didn't think like this - many sold a lot of their resources to fund the Crusade. They also knew that Pope Urban II rewarded those close to him.</p>
                        </div>
                    </div>
                    <br />
                    <h3 id="social-reasons">Social & Economic Reasons</h3>
                    <p>Many people went on Crusade simply because their master or family was. This included soldiers, washer women & prostitutes. These people couldn't fight & had to be protected by the other Knights, and often drained the already-limited resources.</p>
                    <br />
                    <p>People often sold everything they had to pay for a Crusade, since it was an expensive adventure. Plus, they didn't know if they were coming back or not, and dying in the Holy Land was a religious & heroic place to die.</p>
                    <br />
                    <h2 id="who">Important People</h2>
                    <br />
                    <div className="dual">
                        <div>
                            <h3 id="adhemar">Bishop Adhemar of Le Puy</h3>
                            <p>Bishop Adhemar was an important bishop & was close to Pope Urban II. He was made the representative of the Pope & part of the council that decided overall strategy during the Crusade.</p>
                        </div>
                        <div>
                            <h3 id="raymond">Count Raymond of Toulouse</h3>
                            <p>Raymond was deeply religious & was a close friend and supporter of the Pope. Therefore, he was the first person to join the Crusade, since he also wanted to die there. To fund his journey, he sold all of this land, which showed he was in it for material gain. However, after the Crusade, he did secure land in the region.</p>
                        </div>
                        <div>
                            <h3 id="godfrey">Duke Godfrey of Bouillon</h3>
                            <p>Godfrey was a devout Christian - he took monks along with him as religious advisers. However, he had a rocky relationship with the Papacy since he fought alongside the Holy Roman Emperor Henry IV in the <Link to="../first-background#investiture-contest">Investiture Contest</Link>. Godfrey was also part of one of the most prestigious & senior families in Europe, and was descended from Charlemagne.</p>
                        </div>
                        <div>
                            <h3 id="bohemund">Prince Bohemund IV of Taranto</h3>
                            <p>Bohemond was a strong warrior that saw the First Crusade as an opportunity to gain wealth & land, since he was relatively poor - his father's lands in Italy were given to his brother instead. He also disliked Alexius & extensively fought against him.</p>
                        </div>
                        <div>
                            <h3 id="hugh">Count Hugh of Vermandois</h3>
                            <p>Hugh was the brother of King Phillip I of France. Phillip committed adultery & was excommunicated, so Hugh used the Crusade to show loyalty & forgiveness to the Pope. He also had loyalty towards Alexius - he was shipwrecked near Constantinople & saved by Byzantine troops.</p>
                        </div>
                        <div>
                            <h3 id="robert-flanders">Count Robert of Flanders</h3>
                            <p>Robert's father was a pilgrim & became close friends with Alexius. After he died, Robert felt he had a duty to help the Eastern Christians & go on Crusade to assist.</p>
                        </div>
                        <div>
                            <h3 id="robert-normandy">Duke Robert of Normandy</h3>
                            <p>Robert was the eldest son of the legendary warrior William the Conqueror. After his death, Robert inherited the throne of Normandy, with his younger brother inheriting the desirable throne of England <i>(with his other brother succeeding him)</i>. Nevertheless, him & his brother raised funds and became successful Crusaders - although Robert never lived up to the name of his father.</p>
                        </div>
                        <div>
                            <h3 id="stephen">Count Stephen of Blois</h3>
                            <p>Stephen was son-in-law of William the Conqueror & his son became the King of England. He was deeply religious - and prayed to God to return him safely to his wife. However, he was more intelligent than strong, so he deserted battle. His wife forced him to return to fight, where he died.</p>
                        </div>
                    </div>
                </div>
            </>
        ),
        "first-peoples": (
            <>
                <h1>The People's Crusade</h1>
                <div id="maintext">
                    <p></p>
                </div>
            </>
        ),
        "first-princes": (
            <>
                <h1>The Prince's Crusade</h1>
                <div id="maintext">
                    <TimelineLink title="Journey to Constantinople" location="../first-princes-constantinople" date="1096 - 1097" />
                    <TimelineLink title="Crossing Anatolia" location="../first-princes-anatolia" date="1097 - 1098" />
                    <TimelineLink title="Siege of Antioch" location="../first-princes-antioch" date="1097 - 1098" />
                </div>
            </>
        ),
        "first-princes-constantinople": (
            <>
                <h1>Journey to Constantinople</h1>
                <div id="maintext"> 
                    <h3 id="gathering-forces">Gathering Forces</h3>
                    <p>The several <Link to="../first-calling#who">Lords</Link> built up a large army to go Crusading with - ranging from 50,000 -{">"} 100,000 men. This was the largest army since the fall of the Roman Empire, and much larger than Urban II expected <i>(the army spoke 20 languages & had 7 different currencies)</i>. The approximate breakdown of the army was:</p>
                    <br />
                    <ul>
                        <li><strong>Leaders</strong>: 8.</li>
                        <li><strong>Wealthy Lords</strong>: 200.</li>
                        <li><strong>Knights</strong>: ~6,000 <i>(mostly on horseback)</i>.</li>
                        <li><strong>Well-Armed Soldiers</strong>: ~22,000 <i>(self-equipped weapons)</i>.</li>
                        <li><strong>Foot Soldiers</strong>: ~22,000 <i>(supplied weapons by the Lords)</i>.</li>
                    </ul>
                    <br />
                    <p>This massive army was split up & waited until August/October to set off, which is at the start of the harvest season. This ensured that there would be plenty of food for them to buy on the way to Constantinople. Alexius also ensured that there would be enough supplies in the Balkans, and sent generals to ensure their safety & prevent looting <i>(this would prevent a repeat of the <Link to="../first-peoples">People's Crusade</Link>)</i>. However, Alexius didn't fully trust the Crusaders.</p>
                    <br />
                    <h3 id="constantinople">Constantinople</h3>
                    <p>Alexius needed the trust & support of the masses of people flooding his capital. After he <Link to="../first-background#byzantium">called for help</Link>, he only expected a few mercenaries - he never thought he would receive a large army. Therefore, he assumed many of the arrivals were simply there to win riches. To circumvent this, he flooded the Lords with gifts of gold & jewels - allegedly, his enemy <Link to="../first-calling#bohemund">Bohemund</Link> <i>(who he had fought against before)</i> was given a room filled with gold, silver & cloth. He also made the Crusaders swear an oath of loyalty & to return any land that was previously his, back to him. All but <Link to="../first-calling#raymond">Raymond</Link> agreed.</p>
                    <br />
                    <p>Due to his poor public perception, Alexius was scared that the Crusaders would overthrow him. Therefore, he quickly shipped them across the Bosphorus & into Anatolia.</p>
                    <br />
                    <h3 id="muslims">The Muslim World</h3>
                    <p>By the time of the First Crusade, the Muslim world was incredibly divided. Islam was heavily split, between the Sunni in Egypt & the Shi'ah with the invading Seljuk Turks. Both of these branches were fighting & invading each other. A power vacuum was also created when Sultan Malik Shah & his chief advisor died within weeks of each other & people scrambled for their land. Therefore, there was no unifying force to deal with the oncoming Crusader threat.</p>
                </div>
            </>
        ),
        "first-princes-anatolia": (
            <>
                <h1>Crossing Anatolia</h1>
                <div id="maintext">
                    <p>The Crusaders had little resistance while travelling through Anatolia. The main Muslim Sultan was Kilij Arslan, who had previously dealt with the <Link to="../first-peoples">failed People's Crusade</Link>. Therefore, he underestimated the strength of the Crusader forces & focused more on his Muslim rivals.</p>
                    <br />
                    <h3 id="nicaea">Siege of Nicea</h3>
                    <p>Nicaea was the Seljuk capital, and it is where Kilij kept his army. He underestimated the Crusaders & was severely outnumbered, which led to the city falling after a one-month siege in May 1097. Since it used to be controlled by Byzantium, Alexius banned the Crusaders from looting & rewarded them with money instead - which annoyed them but the reward kept them civil. To ensure this would happen to all the recaptured territory, a Byzantine commander went alongside the Crusaders.</p>
                    <br />
                    <h3 id="dorylaeum">Battle of Dorylaeum</h3>
                    <p>In July 1097, 20,000 of the Crusader's vanguard were ambushed outside Dorylaeum by Kilij, who had strengthened his forces without the Crusaders knowing. <Link to="../first-calling#bohemund">Bohemund</Link>, who was leading the vanguard, managed to organise his troops into a defensive position & last for many hours until <Link to="../first-calling#godfrey">Godfrey</Link> arrived with reinforcements. He successfully destroyed the ambushing forces & pillaged their camps. The failed attack caused the Muslims to lose faith in Kilij's strength.</p>
                    <br />
                    <h3 id="edessa">Control of Edessa</h3>
                    <p>After Dorylaeum, the weather turned bad & many of the Crusaders settled on retaking land rather than advancing. One Lord, Baldwin, decided to travel further inland to a wealthy county called Edessa. Here, he managed to convince the current Count to marry his daughter, thus becoming heir. The Count then died mysteriously not long after, and Baldwin became the Count of Edessa. This was a crucial stronghold for the Crusader forces & allowed them to continue south towards <Link to="../first-princes-antioch">Antioch</Link>.</p>
                </div>
            </>
        ),
        "first-princes-antioch": (
            <>
                <h1>Siege of Antioch</h1>
                <div id="maintext">
                    <p>Antioch was a heavily fortified city that the Crusaders couldn't take over, so they decided to siege the city instead in October 1097. However, the nearby Seljuk forces refused to join to help take over the city, and the supplies & expeditions weren't enough to keep the army afloat. People began dying & deserting. To try and solve this, <Link to="../first-calling#adhemar">Bishop Adhemar</Link> decided to declare the Crusaders sinful, and removed all the women & forced them to fast and pray. Also, more reinforcements kept arriving & richer Crusaders donated to poorer ones. All of this helped boost the morale of the army, and helped keep the siege going.</p>
                    <br />
                    <p>While the Crusaders did manage to fight off smaller Muslim relief forces, by May 1098 they knew a larger one was approaching. They were also growing increasingly angry at Alexius, who hadn't sent enough supplies. In reality, Alexius did send reinforcements, but they were turned back after one of the Lords deserted the siege & warned them that it was a lost cause.</p>
                    <br />
                    <h3 id="entering-the-city">Entering Antioch</h3>
                    <p><Link to="../first-calling#bohemund">Bohemund</Link> managed to estabish secret contact with a Christian guard, who managed to let the army in. This resulted in the Muslim population of the city being massacred & the city being captured by the Crusaders. However, the main citadel of the city was still fortified & under Muslim control. Also, the impending Muslim army was delayed by <Link to="../first-princes-anatolia#edessa">Baldwin in Edessa</Link> & had finally reached Antioch. This resulted in the fresh Muslim army laying siege to the newly-controlled Crusader city, which only had 1/2 of their army left.</p>
                    <br />
                    <p>The situation was dire for the Crusaders. However, a random monk had a vision from God, which revealed the location of the Holy Lance <i>(the spear that stabbed Jesus Christ when he was crucified)</i>. As the vision suggested, a fragment of the lance was buried in the local church, and it created mass religious fever & boosted morale. While some of the Lords were sceptical, they went along as it gave life to the exhausted army.</p>
                    <br />
                    <p>This resulted in the Crusaders launching a surprise counter-attack against the surrounding Muslim army. While they were majorly outnumbered & many of the soldiers lacked basic equipment or a horse, their actions scared off the army & the siege was ended. The Crusaders looted the nearby Muslim camp, and the citadel within Antioch surrendered after seeing this attack.</p>
                </div>
            </>
        ),
        "edessa-1144": (
            <>
                <h1>Fall of Edessa</h1>
                <div id="maintext">
                    <h3 id="zengi">Zengi</h3>
                    <p>In the East, there was a Seljuk governor called Zengi who controlled Mosul & Aleppo. He became known as a fearsome & violent warrior, where his own men feared him as much as the enemy did. Zengi showed little interest in the Franks - instead he wanted to grow his empire into southern Syria & Iraq. By the 1140's, the Crusader forces had made many alliances with local Muslim populations - including the Syrian city of Damascus, which Zengi wanted to control. Since Edessa was their ally, he planned an all-out attack on the city.</p>
                    <br />
                    <h3 id="siege-of-edessa">Siege of Edessa</h3>
                    <p>Zengi planted spies in Edessa, which informed him that the current count Joscelin II had left the city alongside most of their army in Autumn 1144. Around this time, the powerhouse of the region - Jerusalem - recently lost their monarch & his heir was still a young child. This made it the perfect time to attack.</p>
                    <br />
                    <p>Zengi quickly built up an army & marched to Edessa by late November. He noticed that there was nobody defending the city, so he built siege engines & started attacking the walls. The inhabitants had no knowledge on how to counter siege warfare, so Zangi eventually broke into the city when part of the wall collapsed on the 24th of December. The fighting lasted 2 days. He slaughtered all the Frankish men, enslaved their women & destroyed the churches.</p>
                </div>
            </>
        ),
        "second": (
            <>
                <h1>The Second Crusade</h1>
                <div id="maintext"> 
                    <TimelineLink title="Calling of the Crusade" location="../second-calling" date="1145 - 1146" />
                    <TimelineLink title="Conrad & Defeat at Damascus" location="../second-conrad" date="1147 - 1148" />
                    <TimelineLink title="Louis & Defeat at Mount Cadmus" location="../second-louis" date="1147 - 1148"/>
                    <TimelineLink title="Defeat in Syria" location="../second-syria" date="1148" />
                </div>
            </>
        ),
        "second-calling": (
            <>
                <h1>Calling of the Crusade</h1>
                <div id="maintext">
                    <h2 id="quantum-praedecessores">Quantum Praedecessores</h2>
                    <p>After the <Link to="../edessa-1144#siege-of-edessa">siege of Edessa</Link>, people were worried that this would cause a domino effect - where all the other Crusader states would fall too. Word of the fall of Edessa reached the Pope, Eugenius III, by May 1145. His response was the outline & spark of the Second Crusade - in the form of the Quantum Praedecessores. This Papal Bull outlined the benefits of going on Crusade, which included:</p>
                    <br />
                    <ul>
                        <li>Full remission of sins, even for those who died on the journey there.</li>
                        <li>Legal protection on the Crusader's families & land.</li>
                        <li>Any interest on debts would be suspended.</li>
                    </ul>
                </div>
            </>
        ),
        "assess-the-reasons-for": (
            <>
                <h1>Assess the reasons for...</h1>
                <div id="maintext">
                    <h3 id="introduction">Introduction</h3>
                    <p>Very short & just defines terms:</p>
                    <br />
                    <ul>
                        <li><strong>There are a number of reasons why...</strong> <i>(link to the question & list all the reasons that you will address them in, in a logical order)</i></li>
                        <li><strong>It is most convincing to argue that...</strong> <i>(state the main reason)</i></li>
                    </ul>
                    <h3 id="paragraphs">Paragraphs</h3>
                    <br />
                    <ul>
                        <li>Clearly signpost the reason, link it to the argument & state how important it is.</li>
                        <li>State why it is important with evidence.</li>
                        <li>State if there are any limitations to how important the factor is.</li>
                        <li>Link it back to the argument & question.</li>
                    </ul>
                    <br />
                    <p>Repeat this for every reason stated in the introduction.</p>
                    <br />
                    <h3 id="conclusion">Conclusion</h3>
                    <p>Very short & very similar to the introduction, as well as stating the importance of each factor:</p>
                    <br />
                    <ul>
                        <li><strong>In conclusion... there are a number of reasons why...</strong> <i>(link to the question & list all the reasons in the order that they have been addressed in)</i></li>
                        <li><strong>Therefore, without a doubt, the most convincing argument is...</strong></li>
                    </ul>
                </div>
            </>
        ),
        "how-far-to-what-extent": (
            <>
                <h1>How far or To what extent, with a stated factor</h1>
            </>
        )
    }

    return (
        <>
            {notes[id]}
            <br />
        </>
    )
}